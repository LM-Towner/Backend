'use strict';
var express = require('express');
var app = express();
app.use('/express-status', function(req, res, next) {
  res.json({ running: true });
});

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}

app.post('/login', function(req, res) {
  User.login({
    email: req.body.email,
    password: req.body.password
  }, 'user', function(err, token) {
    if (err) {
      res.render('response', { //render view named 'response.ejs'
        title: 'Login failed',
        content: err,
        redirectTo: '/',
        redirectToLinkText: 'Try again'
      });
      return;
    }

    res.render('home', { //login user and render 'home' view
      email: req.body.email,
      accessToken: token.id
    });
  });
});
