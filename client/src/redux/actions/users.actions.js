import { USERS_FETCHED_OK } from '../constants/users.constants';
import axios from 'axios';
import API_URL from '../../config';

const usersFetched = users => ({
  type: USERS_FETCHED_OK,
  payload: users
});

export const fetchUsersRequest = () => {
  return dispatch =>
    axios
      .get(`${API_URL}/users`)
      .then(res => {
        dispatch(usersFetched(res.data));
      })
      .catch(err => {
        console.log(err.message);
      });
};
