import React from 'react';
import { useParams } from 'react-router-dom';

import ImagesList from './components/ImagesList';

const Images = props => {
    const userId = useParams().userId;
    const loadedImages = TEST_IMAGES.filter(image => image.creator === userId);
    return <ImagesList usersImages={loadedImages} />

};

export default Images;