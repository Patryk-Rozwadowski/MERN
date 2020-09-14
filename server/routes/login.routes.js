const express = require('express');
const { check } = require('express-validator');

const loginAuth = require('../controllers/login-auth.controller');
const router = express.Router();

/*
    @route      /api/login
    @desc       User loggin in authenticate
    @access     Public
*/
router.post(
  '/',
  [
    check('email', 'Invalid email format.').isEmail(),
    check('password', 'Enter a password with 6 or more characters.').exists()
  ],
  loginAuth
);

module.exports = router;
