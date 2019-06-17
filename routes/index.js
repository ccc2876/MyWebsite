var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

/* GET academics page. */
router.get('/academics', function (req, res) {
  res.render('academics', { title: 'Academics' });
});

exports.index = function (req, res) {
  res.render('academics', { title: 'Academics' });
};

/* GET athletics page. */
router.get('/athletics', function (req, res) {
  res.render('athletics', { title: 'Athletics' });
});

exports.index = function (req, res) {
  res.render('athletics', { title: 'Athletics' });
};

/* GET experience page. */
router.get('/experience', function (req, res) {
  res.render('experience', { title: 'Experience' });
});

exports.index = function (req, res) {
  res.render('experience', { title: 'Experience' });
};


/* GET blog page. */
router.get('/blog', function (req, res) {
  res.render('blog', { title: 'Blog' });
});

exports.index = function (req, res) {
  res.render('blog', { title: 'Blog' });
};

module.exports = router;
