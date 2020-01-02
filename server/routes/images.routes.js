const express = require('express');
const router = express.Router();
const imagesControllers = require('../controllers/images-controller');

router.get('/api/images', imagesControllers.allImages);

router.get('/api/:uid/images', imagesControllers.userImages);

module.exports = router;