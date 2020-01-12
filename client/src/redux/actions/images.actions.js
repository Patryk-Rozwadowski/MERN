import axios from 'axios';
import API_URL from '../../config';

import {
  IMAGE_ADDED,
  IMAGES_FETCHED_OK,
  USER_IMAGES_FETCHED_OK
} from '../constants/images.constants';

const allUsersImagesFetchedOk = images => ({
  type: IMAGES_FETCHED_OK,
  payload: images
});

const userImagesFetchedOk = images => ({
  type: USER_IMAGES_FETCHED_OK,
  payload: images
});

export const addImage = image => ({
  type: IMAGE_ADDED,
  payload: image
});

export const fetchAllUsersImages = () => {
  return dispatch =>
    axios.get(`${API_URL}/images`).then(res => {
      dispatch(allUsersImagesFetchedOk(res.data));
    });
};

export const fetchUserImagesRequest = id => {
  return dispatch =>
    axios.get(`${API_URL}/${id}/images`).then(res => {
      dispatch(userImagesFetchedOk(res.data));
    });
};
