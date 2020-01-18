const mongoose = require('mongoose');
const Users = require('../models/users/users');

require('dotenv').config();
const apiPass = process.env.API_PASSWORD;
const apiUser = process.env.API_USER;
const apiProjectName = process.env.API_PROJECT_NAME;

const url =
    ` mongodb+srv://${apiUser}:${apiPass}@${apiProjectName}-3yhfa.mongodb.net/users?retryWrites=true&w=majority`;
const db = mongoose.connection;
db.once('error', console.error.bind(console, 'MongoDB connection error'));

mongoose.connect(url, {userNewUrlParser: true})
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('connection failed');
    });

const getAllUsers = async (req, res, next) => {
    const allUsers = await Users.find();
    res.json(allUsers);
};

exports.getAllUsers = getAllUsers;