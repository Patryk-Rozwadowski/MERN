const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const Users = require('../models/users/users');

require('dotenv').config();
const apiPass = process.env.API_PASSWORD;
const apiUser = process.env.API_USER;
const apiProjectName = process.env.API_PROJECT_NAME;

const url = ` mongodb+srv://${apiUser}:${apiPass}@${apiProjectName}-3yhfa.mongodb.net/users?retryWrites=true&w=majority`;
const db = mongoose.connection;
db.once('error', console.error.bind(console, 'MongoDB connection error'));

mongoose
  .connect(url, { userNewUrlParser: true })
  .then(() => {
    console.log('Connected to database');
  })
  .catch(() => {
    console.log('connection failed');
  });

const getUserProfile = async (req, res, next) => {
  const userId = await req.params.uid;
  const userProfile = await Users.find({ id: userId });
  res.json(userProfile);
};

const createNewUser = async (req, res, next) => {
  const data = new Users({
    id: uuidv4(),
    name: req.body.name,
    userName: req.body.userName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    followersNumber: 0,
    followingNumber: 0,
    description: 'Hello! I am new here!',
    avatar: 'https://www.ncfs.nl/skin/default_avatar.png',
    profileBg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMf5WC3aRlpmqJwGQujetIc8DODKtoX6Gha5RGvDKhgtv9GyM&s',
    accountType: 'free'
  });

  const result = await data.save();
  res.json(result);
};

exports.getUserProfile = getUserProfile;
exports.createNewUser = createNewUser;
