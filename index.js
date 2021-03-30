const express = require('express');
const data = require('./data/libs');
const filters = require('./data/filters');
const bodyParser = require('body-parser');
const pug = require('pug');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/', (req, res) => {
  res.render('index', { data, filters });
});

app.get('/compare', (req, res) => {
  const { lib1, lib2 } = req.query;
  const left = data.find(d => d.id === lib1);
  const right = data.find(d => d.id === lib2);
  res.render('compare', { left, right });
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

  let filteredData = data;

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
  const lib = data.find(d => d.id === id);
  const others = data.filter(d => d.id !== id).map(d => {
    return {
      id: d.id,
      name: d.name
    };
  });
  res.render('detail-page', { data: lib, others });
});



app.listen(PORT);
console.log('Listening on port: ', PORT);
