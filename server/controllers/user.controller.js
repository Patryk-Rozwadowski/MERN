
const uuidv4 = require('uuid/v4');
const User = require('../models/User/User');

const getUserProfile = async (req, res, next) => {
  const userId = await req.params.uid;
  const userProfile = await User.find({ id: userId });
  res.json(userProfile);
};

const createNewUser = async (req, res, next) => {
  const newUser = new User({
    id: uuidv4(),
    name: req.body.name,
    userName: req.body.userName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  const result = await newUser.save();
  res.json(result);
};

exports.getUserProfile = getUserProfile;
exports.createNewUser = createNewUser;
