
const uuidv4 = require('uuid/v4');
const Users = require('../models/users/users');

const getUserProfile = async (req, res, next) => {

  const userId = await req.params.uid;

  const userProfile = await Users.find({ id: userId });
  console.log(userProfile)
  res.json(userProfile);
};

const createNewUser = async (req, res, next) => {
  const newUser = new Users({
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

  const result = await newUser.save();
  res.json(result);
};

exports.getUserProfile = getUserProfile;
exports.createNewUser = createNewUser;
