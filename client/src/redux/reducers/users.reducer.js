import {USERS_FETCHED} from '../constants';

const initialState = {
    mounted: false,
    loaded: false,
    users: []
};

const users = (state = initialState, {type, payload}) => {
    switch (type) {
        case USERS_FETCHED:
            return {
                ...state,
                users: payload,
                mounted: true,
                loaded: true
            };

        default:
            return state;
    }
};

export default users;