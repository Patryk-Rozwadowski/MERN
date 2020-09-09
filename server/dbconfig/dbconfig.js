const mongoose = require('mongoose');
const process = require('process');

// Load process variables
require('dotenv').config();

const apiPass = process.env.API_PASSWORD;
const apiUser = process.env.API_USER;
const apiProjectName = process.env.API_PROJECT_NAME;

const url = `mongodb+srv://${apiUser}:${apiPass}@${apiProjectName}-3yhfa.mongodb.net/users?retryWrites=true&w=majority`;
const connectDB = async () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Connected to database');
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = connectDB;
