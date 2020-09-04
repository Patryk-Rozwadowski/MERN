const express = require('express');

const usersController = require('../controllers/users.controller');
const router = express.Router();

/*
    @route      GET api/users
    @desc       returning array of all registered users
*/
router.get('/api/users', usersController.getAllUsers);

module.exports = router;
