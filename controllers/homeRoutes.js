const router = require('express').Router();
const path = require('path');
const { Info } = require('../models');
const withAuth = require('../utils/auth');
const exphbs = require('express-handlebars');

router.get('/', async (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/profile', withAuth, (req, res) => {
  res.render('profile');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/addBrewery', (req, res) => {
  res.render('addBrewery');
});

module.exports = router;
