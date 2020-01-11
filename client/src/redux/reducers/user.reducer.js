import {USER_FETCHED_OK} from '../constants/user.constants';

const initialState = {
    isComponentRendered: false,
    isDataFetched: false,
    logged: false,
    user: []
};

const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case USER_FETCHED_OK:
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

export default userReducer;