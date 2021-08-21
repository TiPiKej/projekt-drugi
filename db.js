const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("./users.sqlite", err => {
    if (err) {
      console.error(err.message)
      throw err;
      return;
    }

    db.run(`CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, 
      surname TEXT, 
      address TEXT
    )`, err => {});
});


module.exports = db
