const express = require('express');
const { check } = require('express-validator');

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
router.post('/newuser', [
    check('name', 'Name is required.').not().isEmpty(),
    check('email', 'Invalid email format.').isEmail(),
    check('password', 'Enter a password with 6 or more characters.').isLength({min: 6})
] ,userController.createNewUser);

module.exports = router;
