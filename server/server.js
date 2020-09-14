const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const connectDB = require('./dbconfig/dbconfig');
const imagesRoutes = require('./routes/images.routes');
const usersRoutes = require('./routes/users.routes');
const userRoute = require('./routes/user.routes');
const userImagesRoute = require('./routes/userImages.routes');
const authRoute = require('./routes/auth');
const loginRoute = require('./routes/login.routes');

const port = 8000;
const api = 'api';

connectDB();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(`/${api}/users`, usersRoutes);
app.use(`/${api}/images`, imagesRoutes);
app.use(`/${api}/:uid/images`, userImagesRoute);
app.use(`/${api}/auth`, authRoute);
app.use(`/${api}/register`, userRoute);
app.use(`/${api}/login`, loginRoute);

app.listen(8000, () => {
  console.log(`Server is running on port: ${port}`);
});
