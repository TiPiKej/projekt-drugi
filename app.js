const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/api/addUser', (req, res) => {
  const data = {
    'name': req.body.name || "",
    'surname': req.body.surname || "",
    'address': req.body.address || ""
  }

	res.json({
    'status': 'sukces',
    'data': {
      'name': data.name,
      'surname': data.surname,
      'address': data.address
    }
  });
})

app.get('/api/getUsers', (req, res, next) => {
  res.json({
    'status': 'sukces'
  });
})

module.exports = app;