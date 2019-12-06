import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ImagesList from './components/ImagesList';

const Images = props => {
    const TEST_IMAGES = useSelector((state) => state.imagesReducer.user_images);
    const userId = useParams().userId;
    //const loadedImages = TEST_IMAGES.filter(image => image.creator === userId);
    return <ImagesList usersImages={TEST_IMAGES} />

};

export default Images;