const data = [
    {
        id: 21,
        name: 'Patryk',
        places: ['Poland', 'USA'],
        avatar: 'https://avatars3.githubusercontent.com/u/47067438?s=460&v=40',
        profileBg: 'https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg',
        description: 'Zril incorrupte cu nam. Duo regione euripidis eu, mea ei consetetur posidonium dissentias, munere graeco iracundia eam at. Erant volutpat nam ex, ad nisl ludus interesset pro. Vix facete forensibus ne, no mazim postea splendide vix. Ex assentior contentiones sed.'
    },

    {
        id: 12,
        name: 'Peter',
        places: ['Vietnam', 'USA'],
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        profileBg: 'https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg',
        description: 'Check out my profile!'
    }
];

allUsers = (req, res) => {
    res.json(data);
};

exports.allUsers = allUsers;