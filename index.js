const express = require('express');
const data = require('./data');
const bodyParser = require('body-parser');
const pug = require('pug');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/compare', (req, res) => {
  const { lib1, lib2 } = req.query;
  const left = data.find(d => d.id === lib1);
  const right = data.find(d => d.id === lib2);
  res.render('compare', { left, right });
});

app.post('/filter', (req, res) => {
  console.log(req.body);
  let { 
    sse, 
    agnostic,
    extendable,
    ie11
  } = req.body;

  let filteredData = data;
  if(sse && sse === 'on') {
    sse = sse ? true : false;
    filteredData = data.filter(d => d.sse === sse);
  }

  if(agnostic && agnostic === 'on') {
    agnostic = agnostic ? true : false;
    filteredData = filteredData.filter(d => d.agnostic === agnostic);
  }

  if(extendable && extendable === 'on') {
    extendable = extendable ? true : false;
    filteredData = filteredData.filter(d => d.extendable === extendable);
  }

  if(ie11 && ie11 === 'on') {
    ie11 = ie11 ? true : false;
    filteredData = filteredData.filter(d => d.ie11 === ie11);
  }

  const template = pug.compileFile('views/_results.pug');
  const markup = template({ data: filteredData });
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

app.get('/', (req, res) => {
  res.render('index', { data });
});


app.listen(PORT);
console.log('Listening on port: ', PORT);
