var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});


/* GET blog page. */
router.get('/blog', function (req, res) {
  res.render('blog', { title: 'Blog' });
});

exports.index = function (req, res) {
  res.render('blog', { title: 'Blog' });
};

module.exports = router;
