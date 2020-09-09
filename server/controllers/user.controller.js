
const { validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');

const User = require('../models/User/User');

const getUserProfile = async (req, res, next) => {
  const userId = await req.params.uid;
  const userProfile = await User.find({ id: userId });
  res.json(userProfile);
};

const createNewUser = async (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors : errors.array()})
  }
  console.log(req.body);

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({email});
    if(user) {
      res.status(400).json({errors: [{msg: 'User already exists.'}]});
      return;
    }

    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    });

    user = new User({
      name,
      password,
      avatar,
      email,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save()
    res.send(`User ${name} registered.`)

  } catch(err) {
    console.error((err));
    res.status(500).send('Server error.');
  }
};

exports.getUserProfile = getUserProfile;
exports.createNewUser = createNewUser;
