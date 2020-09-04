const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

/*
    @route      GET api/users
    @desc       returning array of all registered users
*/
router.get('/api/:uid/user', userController.getUserProfile);

/*
    @route      POST @todo
    @desc       @todo
*/
router.post('/newuser', userController.createNewUser);

module.exports = router;
