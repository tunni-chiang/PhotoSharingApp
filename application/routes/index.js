var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
const {getRecentPosts, getPostById} = require('../middleware/postsmiddleware');
var db = require('../config/database');

/* GET home page. */
router.get('/', getRecentPosts, function (req, res, next) {
  // next(new Error('test'));
  res.render('index', { title: "Mark's photo app" });
});

router.get('/login', (req, res, next) => {
  res.render('login', { title: "Login" });
});

router.get('/registration', (req, res, next) => {
  res.render('registration', { title: "Registration" });
});

router.get('/home', (req, res, next) => {
  res.render('home', { title: "Home" });
});

router.get('/imagepost', (req, res, next) => {
  res.render('imagepost', { title: "View Posted Image" });
});

router.use('/postimage', isLoggedIn);

router.get('/postimage', (req, res, next) => {
  res.render('postimage', { title: "Post an Image" });
});

router.get('/post/:id(\\d+)', getPostById, (req, res, next) => {
  res.render('imagepost', { title: `Post ${req.params.id}` });
});

module.exports = router;
