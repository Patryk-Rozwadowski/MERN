const { validationResult } = require('express-validator');

const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const User = require('../models/User/User');

const getUserProfile = async (req, res, next) => {
  const userId = await req.params.uid;
  const userProfile = await User.findOne({ _id: userId });
  res.json(userProfile);
};

const createNewUser = async (req, res, next) => {
  const errors = validationResult(req);
  const { name, email, password } = req.body;
  const avatar = gravatar.url(email, {
    s: '200',
    r: 'pg',
    d: 'mm'
  });

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'User already exists.' }] });
    }

    user = new User({
      name,
      password,
      avatar,
      email
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, process.env.jwtSecret, {expiresIn: 360000}, (err, token) => {
      if(err) throw err;
      res.json({token});
    });
  } catch (err) {
    res.status(500).send('Server error.');
  }
};

exports.getUserProfile = getUserProfile;
exports.createNewUser = createNewUser;
