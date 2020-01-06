import {IMAGE_ADDED, IMAGES_FETCHED, USER_IMAGES_FETCHED} from '../constants';

const initialState = {
    mounted: false,
    loaded: false,
    images: []
};

const images = (state = initialState, {type, payload}) => {
    switch (type) {
        case IMAGES_FETCHED:
            return {
                ...state,
                images: payload,
                mounted: true,
                loaded: true
            };

        case USER_IMAGES_FETCHED:
            return {
                ...state,
                images: payload,
                mounted: true,
                loaded: true
            };

        case IMAGE_ADDED:
            return {
                ...state,
                images: [...state.images, payload]
            };

        default:
            return state;
    }
};

export default images;