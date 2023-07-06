var express = require('express');
var router = express.Router();

/* GET New Message. */
router.get('/', function(req, res, next) {
  res.render('new');
});

module.exports = router;
