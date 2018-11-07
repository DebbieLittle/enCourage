const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const bcrypt = require('bcrypt-nodejs');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/register', (req, res) => {
  db.register(req.body, (err, data) => {
    if (err) {
      res.status(404).send()
    } else {
      res.sendStatus(200)
    }
  })
})

app.post('/pwVerification', (req, res) => {
  let password = req.body.password;
  let username = req.body.username;
  db.verifyUser(username, (err, data) => {
    if (data.length<1 || err) {
      res.sendStatus(401)
    } else {
      bcrypt.compare(password, data[0].password, (err, match) => {
        if (match) {
          db.showUserMsgs(username, (err, data) => {
            data = JSON.stringify(data)
            res.send(data);
          })
        } else {
          res.sendStatus(401)
        }
      })
    }
  })
})

app.post('/encouragement', (req, res) => {
  let params = [req.body.username, req.body.message]
  // console.log(params)
  db.enterMsg(params, (err, data) => {
    if(err) {
      console.log('Message did not post')
    } else {
      res.send(data);
    }
  });
});

app.get('/studentList', (req, res) => {
  db.getStudentList((err, data) => {
    if (err) console.log('ERR getting student list', err)
    else res.send(data)
  })
})

let port = process.env.PORT || 3000
app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});