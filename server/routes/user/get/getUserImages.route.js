const express = require('express');
const router = express.Router();
const imagesControllers = require('../../../controllers/images.controller');

/*
    @route      GET api/:id/images
    @desc       returning array of all User's images with specific id
*/
router.get('/:uid/images', imagesControllers.userImages);

module.exports = router;
