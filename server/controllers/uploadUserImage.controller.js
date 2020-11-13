const User = require('../models/User/User');

uploadUserImage = (req, res) => {
    try {
        const {image} = req.body;
        const userId = req.params.uid;
        const userProfile = User.findOne({ _id: userId }).populate('ImageSchema', ['img']);
        res.json(userProfile);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Whoops, server error!');
    }
};

exports.userImages = uploadUserImage;
