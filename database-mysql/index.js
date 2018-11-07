let mysql = require('mysql');
const bcrypt = require('bcrypt-nodejs')
// const saltRounds = 10;

let connection = mysql.createConnection({
  // host     : 'root',
  user     : 'root',
  password : 'password',
  database : 'encourage'
});

let register = ({username, password}, callback) => {
  bcrypt.hash(password, null, null, (err, hash) => {
    if (err) {
      console.log('Hashing ERR', err)
    } else {
      let params = [username, hash];
      let queryStr = 'INSERT INTO authorize(username, password) VALUES (?, ?)'
      connection.query(queryStr, params, (err, results) => {
        if (err) callback('Registering ERR', err)
        else callback(null, results)
      })
    }
  })
}

let verifyUser = (username, callback) => {
  let queryStr = 'SELECT password FROM authorize WHERE username = ?'
  connection.query(queryStr, username, (err, results) => {
    if (err) callback(err, null)
    else callback(null, results)
  })
}

let showUserMsgs = (username, callback) => {
  let queryStr = 'SELECT messages FROM messages WHERE username = ?'
  connection.query(queryStr, username, (err, results) => {
    if (err) callback(err, null);
    else callback(null, results);
  })
}

let enterMsg = (params, callback) => {
  let queryStr = 'INSERT INTO messages(username, messages) values (?, ?)'
  connection.query(queryStr, params, (err, results) => {
    if (err) callback(err, null)
    else callback(null, results)
  })
}

let getStudentList = (callback) => {
  let queryStr = 'SELECT username FROM authorize'
  connection.query(queryStr, (err, results) => {
    if (err) callback(err, null)
    else callback(null, results)
  })
}

module.exports.showUserMsgs = showUserMsgs;
module.exports.enterMsg = enterMsg;
module.exports.verifyUser = verifyUser;
module.exports.getStudentList = getStudentList;
module.exports.register = register;

// when you call the enterMsg function, params must be an array with username & message