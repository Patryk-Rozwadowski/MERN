const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded( { extended: false }));
app.use(express.json());

const port = 8000;

app.get('/api/images', (req, res) => {
    const data = [
        {
            id: 123,
            name: 'Some cool name',
            author: 'Patryk',
            title: 'My first Image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: 'q1'
        },

        {
            id: 2,
            name: 'Some cool name',
            author: 'Peter',
            title: 'Some cool image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            }
        }
    ];

    res.json(data);
});

app.listen(8000, () => {
    console.log(`Server is running on port: ${port}`);
});