const express = require('express');

const router = express.Router();

userProfile = (req, res) => {
    const userId = req.params.uid;
    const userProfile = data.filter(user => user.id === userId);
    res.json(userProfile);
};

module.exports = router;