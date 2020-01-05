import {USER_FETCHED} from '../constants';

const initialState = {
    mounted: false,
    loaded: false,
    user: []
};

const user = (state = initialState, {type, payload}) => {
    switch (type) {
        case USER_FETCHED:
            return {
                ...state,
                user: payload,
                mounted: true,
                loaded: true
            };

        default:
            return state;
    }
};

export default user;