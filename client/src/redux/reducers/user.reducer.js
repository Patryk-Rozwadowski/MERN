import {USER_FETCHED, USER_LOGGED} from '../constants';

const initialState = {
    mounted: false,
    loaded: false,
    logged: false,
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

        case USER_LOGGED:
            return {
                ...state,
                logged: true,
                mounted: true,
                loaded: true
            };
        default:
            return state;
    }
};

export default user;