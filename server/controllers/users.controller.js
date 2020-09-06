const Users = require('../models/users/users');

const getAllUsers = async (req, res, next) => {
  const allUsers = await Users.find();
  res.json(allUsers);
};

exports.getAllUsers = getAllUsers;
