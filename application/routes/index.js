var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
var getRecentPosts = require('../middleware/postsmiddleware').getRecentPosts;
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

router.get('/post/:id(\\d+)', (req, res, next) => {
  let baseSQL = "select u.username, p.title, p.description, p.photopath, p.created \
  from users u \
  join posts p \
  on u.id=fk_userid \
  where p.id=3;";

  let postId = req.params.id; // variable for server side validation
  db.execute(baseSQL, [postId])
    .then(([results, fields]) => {
      if (results && results.length) {
        let post = results[0];
        res.render('imagepost', { currentPost: post });
      } else {
        req.flash('error', 'This is not the post you are looking for!');
        res.redirect('/');
      }
    })
});

module.exports = router;
