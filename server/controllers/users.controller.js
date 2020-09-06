const User = require('../models/User/User');

const getAllUsers = async (req, res, next) => {
  const allUsers = await User.find();
  res.json(allUsers);
};

exports.getAllUsers = getAllUsers;
