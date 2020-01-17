const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const Users = require('../models/users/users');

require('dotenv').config();
const apiPass = process.env.API_PASSWORD;
const apiUser = process.env.API_USER;
const apiProjectName = process.env.API_PROJECT_NAME;

console.log(apiPass);
const url =
    ` mongodb+srv://${apiUser}:${apiPass}@${apiProjectName}-3yhfa.mongodb.net/users?retryWrites=true&w=majority`;

mongoose.connect(url, {userNewUrlParser: true})
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('connection failed');
    });

const db = mongoose.connection;

db.once('error', console.error.bind(console, 'MongoDB connection error'));

const DUMMMY_USER_PROFILE_INFORMATION = [
    {
        id: uuidv4(),
        name: 'Patryk',
        userName: 'Paprykk123',
        places: ['Poland', 'USA'],
        avatar: 'https://avatars3.githubusercontent.com/u/47067438?s=460&v=40',
        profileBg: 'https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg',
        description:
            'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym',
        followersNumber: 100,
        followingNumber: 12,
        accountType: 'free'
    },

    {
        id: 12,
        name: 'Peter',
        userName: 'SuperPeter',
        places: ['Vietnam', 'USA'],
        avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'Check out my profile!',
        profileBg:
            'https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg',
        followersNumber: 1520,
        followingNumber: 124,
        accountType: 'vip'
    }
];
const getUserProfile = (req, res) => {
    const userId = req.params.uid;
    const userProfile = DUMMMY_USER_PROFILE_INFORMATION.filter(
        user => user.id == userId
    );
    res.json(userProfile);
};

const createNewUser = async (req, res, next) => {
    debugger;
    const data = new Users({
        id: uuidv4(),
        name: req.body.name,
        userName: req.body.userName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        followersNumber: 0,
        followingNumber: 0,
        description: 'No description',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        profileBg: 'https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg',
        accountType: 'free'
    });

    const result = await data.save();
    res.json(result);
};

const getUsers = async (req, res, next) => {
};

exports.getUserProfile = getUserProfile;
exports.createNewUser = createNewUser;
