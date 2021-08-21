const express = require('express');
const cors = require('cors')
const db = require('./db');

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

  if (data.name === '' || data.surname === '') res.json({
    'ok': false,
    'code': 411,
    'error': 'Not enough data'
  })

  const sql = `INSERT INTO users (name, surname, address) VALUES (?, ?, ?);`;
  const para = [data.name, data.surname, data.address];

  db.run(sql, para, err => {
    if (err) {
      res.json({
        'ok': false,
        'code': 400,
        'error': "Something went wrong"
      })
      return;
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
})

app.get('/api/getUsers', (req, res, next) => {
  const sql = `SELECT * FROM users;`;

  db.all(sql, [], (err, users) => {
    if (err) {
      res.json({
        'ok': false,
        'code': 400,
        'error': "Something went wrong"
      })
      return;
    }

    res.json({
      'ok': true,
      'code': 200,
      'users': users
    });
  })
})

module.exports = app;