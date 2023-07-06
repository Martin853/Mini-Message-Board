var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var messages = req.messages

  res.send('respond with a resource', {messages: messages});
});

module.exports = router;
