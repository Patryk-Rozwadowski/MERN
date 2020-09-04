const Users = require('../models/users/users');

require('dotenv').config();

const getAllUsers = async (req, res, next) => {
  const allUsers = await Users.find();
  res.json(allUsers);
};

exports.getAllUsers = getAllUsers;
