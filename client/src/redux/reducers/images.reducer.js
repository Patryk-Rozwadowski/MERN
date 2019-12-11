import { IMAGES_FETCHED, REQUEST_FETCH_IMAGES } from '../constants';
import axios from 'axios';

import API_URL from '../../config';

const requestImagesFetch = () => ({
    type: REQUEST_FETCH_IMAGES
});

export const imagesFetched = (images) => ({
    type: IMAGES_FETCHED,
    payload: images
});

const initialState = {
    mounted: false,
    loaded: false,
    images: []
};

export function imagesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case IMAGES_FETCHED:
            return {
                ...state,
                images: payload,
                mounted: true,
                loaded: true
            };

        default:
            return state
    }
}

export const fetchImagesRequest = () => {
    return (dispatch) =>
    axios.get(`${API_URL}/images`)
    .then(res => {
        dispatch(requestImagesFetch());
                dispatch(imagesFetched(res.data))
            })
            .catch(err => {
                    console.log(err.message);
            })

};