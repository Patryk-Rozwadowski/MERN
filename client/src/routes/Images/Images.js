import React from 'react';
import { connect } from 'react-redux';

import ImagesList from './components/ImagesList';
import { FETCH_IMAGES } from '../../redux/constants';
import {imagesFetched} from '../../redux/reducers/images.reducer';

const Images = props => {
    const TEST_IMAGES = props.images;

    //const userId = useParams().userId;
    const loadedImages = TEST_IMAGES//.filter(image => image.creator === userId);
    return <ImagesList usersImages={TEST_IMAGES} />

};

const mapStateToProps = state => {
    debugger
    return {
        images: state.imagesReducer.user_images
    }
}

export default connect(mapStateToProps, null)(Images);