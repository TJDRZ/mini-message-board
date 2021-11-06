var express = require('express');
var router = express.Router();

const messages = [
  {
    Message: "Hi there!",
    Author: "Amando",
    Added: new Date()
  },
  {
    Message: "Hello World!",
    Author: "Charles",
    Added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

/* POST new msg. */
router.post('/new', function(req, res, next) {
  messages.push({Message: req.body.msg, Author: req.body.author, Added: new Date()});
  res.redirect('/')
});

module.exports = router;
