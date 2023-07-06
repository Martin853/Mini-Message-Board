var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var messages = req.messages

  res.render('index', { messages: messages });
});

module.exports = router;
