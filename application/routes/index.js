var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;

/* GET home page. */
router.get('/', function (req, res, next) {
  // next(new Error('test'));
  res.render('index', { name: "Mark Kim" });
});

router.get('/login', (req, res, next) => {
  res.render('login', {title:"Login"});
});

router.get('/registration', (req, res, next) => {
  res.render('registration', {title:"Registration"});
});

router.get('/home', (req, res, next) => {
  res.render('home', {title:"Home"});
});

router.get('/imagepost', (req, res, next) => {
  res.render('imagepost', {title:"View Posted Image"});
});

router.use('/postimage', isLoggedIn);

router.get('/postimage', (req, res, next) => {
  res.render('postimage', {title:"Post an Image"});
});

module.exports = router;
