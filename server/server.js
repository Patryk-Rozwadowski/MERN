const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = 8000;

app.get('/api/images', (req, res) => {
    const data = [
        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Patryk',
            title: 'My first Image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '21'
        },

        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Peter',
            title: 'Some cool image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '12'
        },
        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Patryk',
            title: 'My first Image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '21'
        },

        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Peter',
            title: 'Some cool image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '12'
        },
        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Patryk',
            title: 'My first Image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '21'
        },

        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Peter',
            title: 'Some cool image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '12'
        },
        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Patryk',
            title: 'My first Image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '21'
        },

        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Peter',
            title: 'Some cool image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '12'
        },
        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Patryk',
            title: 'My first Image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '21'
        },

        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Peter',
            title: 'Some cool image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '12'
        },
        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Patryk',
            title: 'My first Image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '21'
        },

        {
            id: Math.random(),
            name: 'Some cool name',
            author: 'Peter',
            title: 'Some cool image',
            description: 'Something new! Cool image!',
            imageUrl: 'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                lat: 51.702372,
                lng: 19.414996
            },
            creator: '12'
        }
    ];

    res.json(data);
});

app.get('/api/users', (req, res) => {
    const data = [
        {
            id: 21,
            name: 'Patryk',
            places: ['Poland', 'USA'],
            avatar: 'https://avatars3.githubusercontent.com/u/47067438?s=460&v=40',
            description: 'Hello! I am new here',
        },


        {
            id: 12,
            name: 'Peter',
            places: ['Vietnam', 'USA'],
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            description: 'Check out my profile!',
        }
    ];

    res.json(data);
});

app.listen(8000, () => {
    console.log(`Server is running on port: ${port}`);
});