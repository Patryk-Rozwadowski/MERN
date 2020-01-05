import {REQUEST_FETCH_USERS, USERS_FETCHED} from '../constants';
import axios from 'axios';
import API_URL from '../../config';

const requestUsersFetch = () => ({
    type: REQUEST_FETCH_USERS
});

const usersFetched = (users) => ({
    type: USERS_FETCHED,
    payload: users
});

export const fetchUsersRequest = () => {
    return (dispatch) =>
        axios.get(`${API_URL}/users`)
            .then(res => {
                dispatch(requestUsersFetch());
                dispatch(usersFetched(res.data));
            })
            .catch(err => {
                console.log(err.message);
            });

};