import {IMAGES_FETCHED} from '../constants';

const initialState = {
    mounted: false,
    loaded: false,
    images: []
};

export function images(state = initialState, {type, payload}) {
    switch (type) {
        case IMAGES_FETCHED:
            return {
                ...state,
                images: payload,
                mounted: true,
                loaded: true
            };

        default:
            return state;
    }
}
