const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const connectDB = require('./dbconfig/dbconfig');
const imagesRoutes = require('./routes/images.routes');
const usersRoutes = require('./routes/users.routes');
const userRoute = require('./routes/user.routes');
const port = 8000;

connectDB();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(imagesRoutes);
app.use(usersRoutes);
app.use(userRoute);

app.listen(8000, () => {
  console.log(`Server is running on port: ${port}`);
});
