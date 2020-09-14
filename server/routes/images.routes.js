const express = require('express');
const router = express.Router();
const imagesControllers = require('../controllers/images.controller');

/*
    @route      GET api/images
    @desc       returning array of all users images
*/
router.get('/', imagesControllers.allImages);

module.exports = router;
