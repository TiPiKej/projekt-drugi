const sqlite3 = require('sqlite3').verbose()
const md5 = require('md5')

const db = new sqlite3.Database("/users.sqlite", err => {
    if (err) {
      console.error(err.message)
      throw err
    }

    db.run(`CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, 
      surname TEXT, 
      address TEXT
    )`);
});


module.exports = db
