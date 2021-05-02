const express = require('express');
const { routes } = require('../app');
const router = express.Router();
const db = require('../config/database');

router.get('/getAllUsers', (req, res, next) => {
    db.query('select * from users;', (err, results, fields) => {
        if(err){
            next(err);
        }
        console.log(results);
        res.send(results);
    });
});

router.get('/getAllPosts', (req, res, next) => {
    db.query('select * from posts;', (err, results, fields) => {
        if(err){
            next(err);
        }
        console.log(results);
        res.send(results);
    });
});

router.get('/getAllPostsP', (req, res, next) => {
    db.query('select * from posts;')
    .then(([results, fields]) => {
        console.log(results);
        res.send(results);
    })
    .catch((err) => {
        next(err);
    });
});

// Chaining promises
// router.get('/getAllPostsP', (req, res, next) => {
//     db.query('select * from posts;')
//     .then(([results, fields]) => {
//         console.log(results);
//         return db.query('Select * from posts where id=2');
//     })
//     .then(([results, fields]) => {
//         console.log(results);
//         res.send(results);
//     })
// });

/* <form action="/dbtest/createUser" method="POST" encType="x-www-form-urlencoded">
   <input id="password" name="password" />
   <input id="username" name="username" />
   <input id="email" name="email" />
   <input id="button" type="submit" />
</form> */

router.post('/createUser', (req, res, next) => {
    console.log(req.body);
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    
    // validate data, if bad send back response
    // res.redirect('/registration');
    
    
    let baseSQL = 'INSERT INTO users (username, email, password, created) VALUES (?, ?, ?, now())';
    db.query(baseSQL, [username, email, password])
    .then(([results, fields]) => {
        if(results && results.affectedRows) {
            res.send('user was made');
        }else{
            res.send('user was not made for some reason');
        }
    })
    .catch((err) => {
        next(err);
    });
});

// Test with curl
// curl -H "Content-Type: application/x-www-form-urlencoded" -X POST -d "username=marktest&email=testemail01@mail.com&password=arstneiojly" localhost:3000/dbtest/createUser

module.exports = router;