const express = require('express');
const router = express.Router();
const imagesControllers = require('../controllers/images-controller');

/*
    @route      GET api/:id/images
    @desc       returning array of all user's images with specific id
*/
router.get('/', imagesControllers.userImages);

module.exports = router;
