import React from 'react';
import { useParams } from 'react-router-dom';

import ImagesList from './components/ImagesList';

const Images = props => {
    const TEST_IMAGES = [{
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
        id: Math.random(),
        name: 'Some cool name',
        author: 'Peter',
        title: 'Some cool image',
        description: 'Something new! Cool image!',
        imageUrl: 'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        location: {
            lat: 51.702372,
            lng: 19.414996
        }
    }];

    const userId = useParams().userId;
    const loadedImages = TEST_IMAGES.filter(image => image.creator === userId);
    return <ImagesList usersImages={loadedImages} />

};

export default Images;