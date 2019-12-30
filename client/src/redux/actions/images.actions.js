import axios from 'axios';
import API_URL from '../../config';

import {IMAGE_ADDED, IMAGES_FETCHED, REQUEST_FETCH_IMAGES} from '../constants';

export const imagesFetched = (images) => ({
    type: IMAGES_FETCHED,
    payload: images
});

export const requestImagesFetch = () => ({
    type: REQUEST_FETCH_IMAGES
});

export const addImage = image => ({
    type: IMAGE_ADDED,
    payload: image
});

export const fetchImagesRequest = () => {
    return (dispatch) =>
        axios.get(`${API_URL}/images`)
            .then(res => {
                dispatch(requestImagesFetch());
                dispatch(imagesFetched(res.data));
            })
            .catch(err => {
                console.log(err.message);
            });

};