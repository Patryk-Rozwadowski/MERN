import {
  IMAGE_ADDED,
  IMAGES_FETCHED_OK,
  USER_IMAGES_FETCHED_OK
} from '../constants/images.constants';

// @todo logged
const initialState = {
  isComponentMounted: false,
  isDataFetched: false,
  logged: false,
  imagesListAllUsers: [],
  imagesUser: []
};

const imagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGES_FETCHED_OK:
      return {
        ...state,
        imagesListAllUsers: payload,
        isComponentMounted: true,
        isDataFetched: true
      };

    case USER_IMAGES_FETCHED_OK:
      return {
        ...state,
        imagesUser: payload,
        isComponentMounted: true,
        isDataFetched: true
      };

    case IMAGE_ADDED:
      return {
        ...state,
        imagesUser: [...state.imagesUser, payload]
      };

    default:
      return state;
  }
};

export default imagesReducer;
