const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const imagesRoutes = require('./routes/images.routes');
const userRoutes = require('./routes/users.routes');

app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use(express.json());
const port = 8000;

app.use(imagesRoutes);
app.use(userRoutes);

app.listen(8000, () => {
    console.log(`Server is running on port: ${port}`);
});