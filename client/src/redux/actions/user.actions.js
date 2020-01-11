import axios from 'axios';

import API_URL from '../../config';
import {USER_FETCHED_OK} from '../constants/user.constants';

const userFetched = (userProfileInformation) => ({
    type: USER_FETCHED_OK,
    payload: userProfileInformation
});

export const fetchUserInfoRequest = (id) => {
    return dispatch => {
        axios.get(`${API_URL}/${id}/user`)
            .then((res) => {
                dispatch(userFetched(res.data));
            });
    };
};

export const loginUserRequest = () => {
    return dispatch => {
        axios.get(`${API_URL}/`)
            .then((res) => {
                dispatch(userFetched(res.data));
            });
    };
};