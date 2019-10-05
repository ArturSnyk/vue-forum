const passport = require('passport');
const express = require('express');

const { create } = require('./utils');

const router = express.Router();

require('../passport/google');

router.get('/google',
  passport.authenticate('google', {
      scope: ['profile', 'email']
    }));

router.get('/google/callback',
  // default auth request handeling
  // passport.authenticate('google', {
  //     failureRedirect: '/login'
  //   }),
  // (req, res) => {
  //   // Successful authentication, redirect home.
  //   res.redirect('/');
  // }

  // custom auth handeling
  (req, res, next) => {
    passport.authenticate('google', async (err, user) => {
      if (err) { return next(err); }
      try {
        const token = await create(user);
        // currently not best practice
        res.redirect(`${process.env.CLIENT_REDIRECT}${token}`);
      } catch (error) {
        res.redirect(`${process.env.CLIENT_ERROR_REDIRECT}${error.message}`);
      }
    })(req, res, next);
  });

module.exports = router;