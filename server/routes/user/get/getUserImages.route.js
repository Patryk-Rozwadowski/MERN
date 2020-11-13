const express = require('express');
const router = express.Router();
const uploadUserImageController = require('../../../controllers/uploadUserImage.controller');

/*
    @route      GET api/:id/images
    @desc       returning array of all User's images with specific id
*/
router.get('/:uid/images', uploadUserImageController.userImages);

module.exports = router;
