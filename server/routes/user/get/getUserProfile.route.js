const express = require('express');

const userController = require('../../../controllers/user.controller');
const router = express.Router();

/*
    @route      GET /api/:uid/user
    @desc       Returning object containing User profile information
    @access     Public
*/
router.get('/:uid/user', userController.getUserProfile);

module.exports = router;
