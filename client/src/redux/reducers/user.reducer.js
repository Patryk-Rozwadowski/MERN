import {USER_FETCHED_OK} from '../constants/user.constants';

const initialState = {
    isComponentMounted: false,
    isDataFetched: false,
    logged: false,
    userInformations: []
};

const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case USER_FETCHED_OK:
            return {
                ...state,
                userInformations: payload,
                isComponentMounted: true,
                isDataFetched: true
            };
        default:
            return state;
    }
};

export default userReducer;