import {USERS_FETCHED_OK} from '../constants/users.constants';

const initialState = {
    isComponentRendered: false,
    isDataFetched: false,
    users: []
};

const users = (state = initialState, {type, payload}) => {
    switch (type) {
        case USERS_FETCHED_OK:
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