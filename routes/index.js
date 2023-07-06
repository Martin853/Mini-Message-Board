var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var messages = req.messages
  
  res.render('index', { messages: messages });
});

// POST

router.post('/new', (req, res) => {
  var messages = req.messages
  var username = req.body.username
  var message = req.body.message

  messages.push({text: message, user: username, added: new Date()})
    
  res.redirect('/')
})

module.exports = router;
