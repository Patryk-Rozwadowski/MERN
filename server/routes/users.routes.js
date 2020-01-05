const express = require('express');

const data = [
    {
        id: 21,
        name: 'Patryk',
        userName: 'Paprykk123',
        places: ['Poland', 'USA'],
        avatar: 'https://avatars3.githubusercontent.com/u/47067438?s=460&v=40',
        profileBg: 'https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg',
        description: 'Hello! I am new here',
        followers: 100,
        following: 12,
        accountType: 'premium'
    },

    {
        id: 12,
        name: 'Peter',
        userName: 'superPeter',
        places: ['Vietnam', 'USA'],
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'Check out my profile!',
        profileBg: 'https://cdnp2.stackassets.com/d266074e6d32c9116aab88607fcbd97f939896fb/store/d22f1c81f037ce003d2ae2ac1264a21eb3667a66a4fabddd9d3509f19a47/sale_16031_primary_image_wide.jpg',
        followers: 1520,
        following: 124,
        accountType: 'free'
    }
];

const data1 = [
    {
        id: 21,
        name: 'Patryk',
        userName: 'Paprykk123',
        places: ['Poland', 'USA'],
        avatar: 'https://avatars3.githubusercontent.com/u/47067438?s=460&v=40',
        profileBg: 'https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg',
        description: 'Hello! I am new here',
        followers: 100,
        following: 12
    },

    {
        id: 12,
        name: 'Peter',
        places: ['Vietnam', 'USA'],
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'Check out my profile!',
        profileBg: 'https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg',
        followers: 1520,
        following: 124
    }
];
const router = express.Router();

router.get('/api/users', (req, res) => {
    res.json(data);
});

router.get('/api/:uid/user', (req, res) => {
    const userId = parseInt(req.params.uid);
    const userInfo = data1.filter(user => user.id === userId);
    res.json(userInfo);
});

module.exports = router;