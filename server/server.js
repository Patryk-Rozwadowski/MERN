const express = require('express');
const cors = require('cors');
const app = express();

const imagesRoutes = require('./routes/images.routes');
const usersRoutes = require('./routes/users.routes');
const userRoute = require('./routes/user.routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
const port = 8000;

app.use(imagesRoutes);
app.use(usersRoutes);
app.use(userRoute);

app.listen(8000, () => {
  console.log(`Server is running on port: ${port}`);
});
