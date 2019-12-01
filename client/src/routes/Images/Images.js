import React from 'react';

import ImagesList from './components/ImagesList';

const Images = props => {
    const TEST_IMAGES = [{
        id: Math.random(),
        name: 'Some cool name',
        title: 'My first Image',
        description: 'Something new! Cool image!',
        imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    }];

    return <ImagesList usersImages={TEST_IMAGES} />
};

export default Images;