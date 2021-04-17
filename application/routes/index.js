var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { name: "Mark Kim" });
});

router.get('/login', (req, res, next) => {
  res.render('login', {title:"Login"});
});

router.get('/home', (req, res, next) => {
  res.render('home', {title:"Home"});
});

router.get('/imagepost', (req, res, next) => {
  res.render('imagepost', {title:"View Posted Image"});
});

router.get('/postimage', (req, res, next) => {
  res.render('postimage', {title:"Post an Image"});
});

router.get('/registration', (req, res, next) => {
  res.render('registration', {title:"Registration"});
});

module.exports = router;
