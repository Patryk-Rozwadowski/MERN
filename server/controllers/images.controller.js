const data = [
  {
    id: 1,
    name: 'Some cool name',
    author: 'Patryk',
    title: 'My first Image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://fajnepodroze.pl/wp-content/uploads/2017/11/ciekawostki-o-kanadzie.jpg',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '21'
  },

  {
    id: 2,
    name: 'Some cool name',
    author: 'Peter',
    title: 'Some cool image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '12'
  },
  {
    id: 1,
    name: 'Some cool name',
    author: 'Patryk',
    title: 'My first Image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.photowall.com/products/58341/foggy-forest-4.jpg?h=699&q=85',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '21'
  },

  {
    id: 2,
    name: 'Some cool name',
    author: 'Peter',
    title: 'Some cool image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '12'
  },
  {
    id: 1,
    name: 'Some cool name',
    author: 'Patryk',
    title: 'My first Image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '21'
  },

  {
    id: 2,
    name: 'Some cool name',
    author: 'Peter',
    title: 'Some cool image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '12'
  },
  {
    id: 1,
    name: 'Some cool name',
    author: 'Patryk',
    title: 'My first Image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '21'
  },

  {
    id: 2,
    name: 'Some cool name',
    author: 'Peter',
    title: 'Some cool image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '12'
  },
  {
    id: 1,
    name: 'Some cool name',
    author: 'Patryk',
    title: 'My first Image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '21'
  },

  {
    id: 2,
    name: 'Some cool name',
    author: 'Peter',
    title: 'Some cool image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '12'
  },
  {
    id: 1,
    name: 'Some cool name',
    author: 'Patryk',
    title: 'My first Image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    location: {
      lat: 51.702372,
      lng: 19.414996
    },
    creator: '21'
  },

  {
    id: 2,
    name: 'Some cool name',
    author: 'Peter',
    title: 'Some cool image',
    description: 'Something new! Cool image!',
    imageUrl:
      'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    location: {
      lat: 51.702372,
      lng: 19.4149
    },
    creator: '12'
  }
];

allImages = (req, res) => {
  res.json(data);
};

userImages = (req, res) => {
  const userId = req.params.uid;
  const userImages = data.filter(img => img.creator === userId);
  res.json(userImages);
};

exports.allImages = allImages;
exports.userImages = userImages;
