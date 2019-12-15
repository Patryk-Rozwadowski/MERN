import {REQUEST_FETCH_USERS, USERS_FETCHED} from '../constants';

import axios from 'axios';
import API_URL from '../../config';

const requestUsersFetch = () => ({
    type: REQUEST_FETCH_USERS
});

export const usersFetched = (users) => ({
    type: USERS_FETCHED,
    payload: users
});

const initialState = {
    mounted: false,
    loaded: false,
    users: []
};

export function users(state = initialState, {type, payload}) {
    switch (type) {
        case USERS_FETCHED:
            return {
                ...state,
                users: payload,
                mounted: true,
                loaded: true
            };

        default:
            return state
    }
}

export const fetchUsersRequest = () => {
    return (dispatch) =>
        axios.get(`${API_URL}/users`)
            .then(res => {
                dispatch(requestUsersFetch());
                dispatch(usersFetched(res.data))
            })
            .catch(err => {
                console.log(err.message);
            })

};