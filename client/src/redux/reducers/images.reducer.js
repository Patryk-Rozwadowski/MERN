import { IMAGES_FETCHED, REQUEST_FETCH_IMAGES } from '../constants';
import axios from 'axios';

import API_URL from '../../config';

const requestImagesFetch = () => ({
    type: REQUEST_FETCH_IMAGES
})

export const imagesFetched = (images) => ({
    type: IMAGES_FETCHED,
    payload: images
});

const initialState = {
    mount: false,
};

export function imagesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case IMAGES_FETCHED:
            return {
                ...state,
                images: payload,
                mounted: true,

            }

        default:
            return state
    }
};

export const fetchImagesRequest = () => {
    return (dispatch) =>
    axios.get(`http://localhost:8000/api/images`)
    .then(res => {
        dispatch(requestImagesFetch());
                dispatch(imagesFetched(res.data))
                console.log(res.data);
            })
            .catch(err => {
                    console.log(err.message);
            })

};