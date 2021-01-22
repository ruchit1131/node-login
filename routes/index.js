const express = require('express');
const router = express.Router();
const path = require('path');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.use(path.join(__dirname, '../build'), require('./routes/index.js'));
router.get('/dashboard', forwardAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
  })



module.exports = router;
