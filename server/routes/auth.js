const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/User/User');
/*
    @route      GET /api/auth
    @desc       json web token authorization with middleware
*/
router.get('/', auth, async (req, res) => {
  try {
    let { user } = req;
    const userFinded = await User.findById(user.id).select('-password');
    res.json(userFinded);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error auth');
  }
});

module.exports = router;
