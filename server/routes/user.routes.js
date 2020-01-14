const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/api/:uid/user', userController.getUserProfile);

router.post('/newuser', userController.createNewUser);

module.exports = router;
