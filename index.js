const express = require('express');
const data = require('./data');

const PORT = process.env.PORT || 3000;

const app = express();


app.set('view engine', 'pug');

app.get('/:id', (req, res) => {
  const { id } = req.params;
  const lib = data.find(d => d.id === id);
  res.render('detail-page', { data: lib });
});

app.get('/', (req, res) => {
  res.render('index', { data });
});


app.listen(PORT);
console.log('Listening on port: ', PORT);
