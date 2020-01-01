const express = require('express');

const router = express.Router();

router.get('/api/images', (req, res) => {
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
            creator: 21
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
            creator: 12
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
            creator: 21
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
            creator: 12
        }
    ];

    res.json(data);
});

module.exports = router;