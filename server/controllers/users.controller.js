const data = [
    {
        id: 21,
        name: 'Patryk',
        places: ['Poland', 'USA'],
        avatar: 'https://avatars3.githubusercontent.com/u/47067438?s=460&v=40',
        description: 'Hello! I am new here'
    },

    {
        id: 12,
        name: 'Peter',
        places: ['Vietnam', 'USA'],
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'Check out my profile!'
    }
];

allUsers = (req, res) => {
    res.json(data);
};

userProfile = (req, res) => {
    const userId = req.params.uid;
    const userProfile = data.filter(user => user.id === userId);
    res.json(userProfile);
};

exports.allUsers = allUsers;