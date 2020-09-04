const express = require('express');
const router = express.Router();
const imagesControllers = require('../controllers/images-controller');

/*
    @route      GET api/images
    @desc       returning array of all users images
*/
router.get('/api/images', imagesControllers.allImages);


/*
    @route      GET api/:id/images
    @desc       returning array of all user's images with specific id
*/
router.get('/api/:uid/images', imagesControllers.userImages);

module.exports = router;
