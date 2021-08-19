const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.json({
    'status': 'sukces'
  });
});

app.listen(8080, () => {
  console.log("Nasluchiwanie portu 8080");
});