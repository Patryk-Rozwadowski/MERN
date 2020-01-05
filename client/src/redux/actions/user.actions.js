import axios from 'axios';
import API_URL from '../../config';
import {REQUEST_FETCH_USER, USER_FETCHED} from '../constants';

const requestUserFetch = () => ({
    type: REQUEST_FETCH_USER
});

const userFetched = (user) => ({
    type: USER_FETCHED,
    payload: user
});

export const fetchUserInfoRequest = (id) => {
    return dispatch => {
        axios.get(`${API_URL}/${id}/user`)
            .then((res) => {
                dispatch(requestUserFetch(res.data[0].id));
                dispatch(userFetched(res.data));
            })
            .catch(err => {
                console.log(err.message);
            });
    };
};

export const loginUserRequest = () => {
    return dispatch => {
        axios.get(`${API_URL}/`)
            .then((res) => {
                dispatch(requestUserFetch(res.data[0].id));
                dispatch(userFetched(res.data));
            })
            .catch(err => {
                console.log(err.message);
            });
    }
}