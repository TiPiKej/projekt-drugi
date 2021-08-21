const express = require('express');
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.post('/api/addUser', (req, res) => {
  const data = {
    'name': req.body.name || "",
    'surname': req.body.surname || "",
    'address': req.body.address || ""
  }

	res.json({
    'ok': true,
    'code': 200,
    'data': {
      'name': data.name,
      'surname': data.surname,
      'address': data.address
    }
  });
})

app.get('/api/getUsers', (req, res, next) => {
  const users = [
    {
      'name': 'Jan',
      'surname': 'Nowak',
      'address': 'Krakow'
    },
    {
      'name': 'Adam',
      'surname': 'Mickiewicz',
      'address': 'Krakow'
    },
    {
      'name': 'Jan',
      'surname': 'Nowak',
      'address': ''
    },
    {
      'name': 'Jan',
      'surname': 'Nowak',
      'address': 'Krakow'
    }
  ];

  res.json({
    'ok': true,
    'code': 200,
    'users': users
  });
})

module.exports = app;