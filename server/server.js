const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const connectDB = require('./dbconfig/dbconfig');

const usersRoutes = require('./routes/users/get/getAllUsers.route');
const authRoute = require('./routes/auth/auth');
const loginRoute = require('./routes/login.routes');

// USER
const registerNewUser = require('./routes/user/post/registerNewUser.route');
const getUserById = require('./routes/user/get/getUserProfile.route');

// IMAGES
const getUserImages = require('./routes/user/get/getUserImages.route');

const getAllUsersImages = require('./routes/users/get/getAllUsersImages.route')

const port = 8000;
const api = 'api';

connectDB();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(`/${api}/users`, usersRoutes);
app.use(`/${api}/auth`, authRoute);
app.use(`/${api}/login`, loginRoute);


app.use(`/${api}`, registerNewUser);
app.use(`/${api}`, getUserById);
app.use(`/${api}`, getUserImages);

app.use(`/${api}`, getAllUsersImages);

app.listen(8000, () => {
  console.log(`Server is running on port: ${port}`);
});
