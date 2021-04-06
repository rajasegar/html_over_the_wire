const express = require('express');
const libs = require('./data/libs');
const filters = require('./data/filters');
const bodyParser = require('body-parser');
const pug = require('pug');
require('dotenv').config();
const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index', { data: libs, filters });
});

function getOwnerRepo(url) {
  return url
    .replace('https://github.com/','')
    .split('/');
}

function updateGithubInfo(src, dest) {
  src.github.stars = dest.data.stargazers_count;
  src.github.issues = dest.data.open_issues_count;
  src.github.forks = dest.data.forks_count;
}

app.get('/compare', async (req, res) => {
  const { lib1, lib2 } = req.query;
  const left = libs.find(d => d.id === lib1);
  const right = libs.find(d => d.id === lib2);

  const [lOwner, lRepo] = getOwnerRepo(left.github.url);
  const [rOwner, rRepo] = getOwnerRepo(right.github.url);
  try {
    const leftRepo = await octokit.rest.repos.get({
      owner: lOwner,
      repo: lRepo,
    });

    updateGithubInfo(left, leftRepo);

    const rightRepo = await octokit.rest.repos.get({
      owner: rOwner,
      repo: rRepo,
    });

    updateGithubInfo(right, rightRepo);

    res.render('compare', { left, right });
  } catch(err) {
    console.log(err);
    res.send('<p class="text-danger">Github info not found.</p>');
  }
});

function filterBy(attr, value, data) {

  let _filteredData = data;
  if(value && value === 'on') {
    const _val = value ? true : false;
    _filteredData = data.filter(d => d[attr] === _val);
  }
  return _filteredData;
}

app.post('/filter', (req, res) => {
  console.log(req.body);
  const { 
    sse, 
    agnostic,
    extendable,
    ie11,
    nocompilation,
    cdn,
    websockets,
    dependencyFree,
    frameworks,
    history,
    animation
  } = req.body;

  let filteredData = libs;

  if(frameworks && frameworks !== 'none') {
    filteredData = filteredData.filter(f => f.frameworks.includes(frameworks));
  }

  filteredData = filterBy('sse', sse, filteredData);
  filteredData = filterBy('history', history, filteredData);
  filteredData = filterBy('animation', animation, filteredData);
  filteredData = filterBy('agnostic', agnostic, filteredData);
  filteredData = filterBy('extendable', extendable, filteredData);
  filteredData = filterBy('ie11', ie11, filteredData);
  filteredData = filterBy('nocompilation', nocompilation, filteredData);
  filteredData = filterBy('cdn', cdn, filteredData);
  filteredData = filterBy('websockets', websockets, filteredData);
  filteredData = filterBy('dependencyFree', dependencyFree, filteredData);

  const template = pug.compileFile('views/_results.pug');
  //const clearBtn = pug.compileFile('views/_clear-button.pug');
  //let markup = clearBtn();
  let markup = template({ data: filteredData });
  res.send(markup);
});

app.get('/details/:id', (req, res) => {
  const { id } = req.params;
  const lib = libs.find(d => d.id === id);
  const others = libs.filter(d => d.id !== id).map(d => {
    return {
      id: d.id,
      name: d.name
    };
  });
  const [owner, repo] = lib.github.url
    .replace('https://github.com/','')
    .split('/');
  res.render('detail-page', { data: lib, others, owner, repo });
});

app.get('/github', async (req, res) => {
  const { owner, repo, libId } = req.query;
  try {
    const repoInfo = await octokit.rest.repos.get({
      owner,
      repo,
      path: '',
    });

    const githubInfo = {
      github: {
        stars: repoInfo.data.stargazers_count,
        issues: repoInfo.data.forks_count,
        forks: repoInfo.data.open_issues_count 
      }
    };

    const template = pug.compileFile('views/_github-info.pug');
    const markup = template({ data: githubInfo });
    res.send(markup);
  } catch(err) {
    console.log(err);
    res.send('<p class="text-danger">Github info not found.</p>');
  }
});


app.get('/timeline', (req, res) => {
  const timeline = libs.sort((a,b) => new Date(b.releasedIn) - new Date(a.releasedIn));
  res.render('timeline', { libs: timeline });
});


app.get('/add-framework', (req,res) => {
  res.render('add-framework');
});


app.listen(PORT);
console.log('Listening on port: ', PORT);
