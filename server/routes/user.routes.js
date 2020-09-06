const express = require('express');

const userController = require('../controllers/user.controller');
const router = express.Router();


/*
    @route      GET /api/:uid/User
    @desc       returning object containing User profile information
*/
router.get('/:uid/user', userController.getUserProfile);

/*
    @route      POST @todo
    @desc       @todo
*/
router.post('/newuser', userController.createNewUser);

module.exports = router;
