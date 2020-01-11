import axios from 'axios';
import API_URL from '../../config';

import {
    IMAGE_ADDED,
    IMAGES_FETCHED,
    REQUEST_FETCH_IMAGES_USER,
    USER_IMAGES_FETCHED
} from '../constants/images.constants';

const imagesFetched = (images) => ({
    type: IMAGES_FETCHED,
    payload: images
});

const userImagesFetched = (images, id) => ({
    type: USER_IMAGES_FETCHED,
    payload: images,
    id
});

const requestFetchImagesUser = id => ({
    type: REQUEST_FETCH_IMAGES_USER,
    id
});

export const addImage = image => ({
    type: IMAGE_ADDED,
    payload: image
});

export const fetchImagesRequest = () => {
    return (dispatch) =>
        axios.get(`${API_URL}/images`)
            .then(res => {
                dispatch(imagesFetched(res.data));
            })
            .catch(err => {
                console.log(err.message);
            });

};

export const fetchUserImagesRequest = (id) => {
    return (dispatch) =>
        axios.get(`${API_URL}/${id}/images`)
            .then((res) => {
                dispatch(requestFetchImagesUser(res.data[0].creator));
                dispatch(userImagesFetched(res.data));
            })
            .catch(err => {
                console.log(err.message);
            });

};