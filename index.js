const express = require('express');
const data = require('./data');

const PORT = process.env.PORT || 3000;

const app = express();


app.set('view engine', 'pug');

app.get('/compare', (req, res) => {
  const { lib1, lib2 } = req.query;
  const left = data.find(d => d.id === lib1);
  const right = data.find(d => d.id === lib2);
  res.render('compare', { left, right });
});

app.get('/:id', (req, res) => {
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
