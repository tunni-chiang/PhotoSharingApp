var express = require('express');
var router = express.Router();
var db = require('../config/database');
const UserModel = require('../models/Users');
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');
const UserError = require('../helpers/error/UserError');
const validator = require('../helpers/validation/validator');

router.post('/register', (req, res, next) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let cpassword = req.body.cpassword;

  validator.usernameValid(username)
    .then((usernameValid) => {
      if (!usernameValid) {
        throw new UserError(
          "Registration Failed: Username invalid",
          "/registration",
          200
        );
      } else {
        return validator.emailValid(email);
      }
    })
    .then((emailValid) => {
      if (!emailValid) {
        throw new UserError(
          "Registration Failed: Email invalid",
          "/registration",
          200
        );
      } else {
        return validator.passwordValid(password);
      }
    })
    .then((passwordValid) => {
      if (!passwordValid) {
        throw new UserError(
          "Registration Failed: Password invalid",
          "/registration",
          200
        );
      } else {
        return validator.cpasswordValid(password, cpassword);
      }
    })
    .then((passwordsMatch) => {
      if (!passwordsMatch) {
        throw new UserError(
          "Registration Failed: Passwords do not match",
          "/registration",
          200
        );
      } else {
        return UserModel.usernameExists(username);
      }
    })
    .then((usernameDoesExist) => {
      if (usernameDoesExist) {
        throw new UserError(
          "Registration Failed: Username already exists",
          "/registration",
          200
        );
      } else {
        return UserModel.emailExists(email);
      }
    })
    .then((emailDoesExist) => {
      if (emailDoesExist) {
        throw new UserError(
          "Registration Failed: Email already exists",
          "/registration",
          200
        );
      } else {
        return UserModel.create(username, password, email);
      }
    })
    .then((createdUserId) => {
      if (createdUserId < 0) {
        throw new UserError(
          "Server Error, user could not be created",
          "/registration",
          500
        );
      } else {
        successPrint("User.js --> User was created!!");
        req.flash('success', 'User account has been created!');
        res.redirect('/login');
      }
    })
    .catch((err) => {
      errorPrint("User could not be made", err);
      if (err instanceof UserError) {
        errorMessage = err.getMessage();
        errorPrint(errorMessage);
        req.flash('error', errorMessage);
        res.status(err.getStatus());
        res.redirect(err.getRedirectURL());
      } else {
        next(err);
      };
    });
});

router.post('/login', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  validator.usernameValid(username)
    .then((usernameValid) => {
      if (!usernameValid) {
        throw new UserError(
          "Login Failed: Username invalid",
          "/registration",
          200
        );
      } else {
        return validator.passwordValid(password);
      }
    })
    .then((passwordValid) => {
      if (!passwordValid) {
        throw new UserError(
          "Login Failed: Password invalid",
          "/registration",
          200
        );
      } else {
        return UserModel.authenticate(username, password);
      }
    })
    .then((loggedUserId) => {
      if (loggedUserId > 0) {
        successPrint(`User ${username} is logged in`);
        req.session.username = username;
        req.session.userId = loggedUserId;
        res.locals.logged = true;
        req.flash('success', 'You have been successfully logged in!');
        res.redirect('/');
      } else {
        throw new UserError("Invalid username and/or password!", "/login", 200);
      }
    })
    .catch((err) => {
      if (err instanceof UserError) {
        errorMessage = err.getMessage();
        errorPrint(errorMessage);
        req.flash('error', errorMessage);
        res.status(err.getStatus());
        res.redirect(err.getRedirectURL());
      } else {
        next(err);
      }
    })
});

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      errorPrint('Session could not be destroyed.');
      next(err);
    } else {
      successPrint('Session was successfully destroyed.');
      res.clearCookie('csid');
      res.json({ status: "OK", message: "User is logged out" });
    }
  });
});

module.exports = router;