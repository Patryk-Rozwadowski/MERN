import { USERS_FETCHED_OK } from '../constants/users.constants';

const initialState = {
  isComponentMounted: false,
  isDataFetched: false,
  allUsersArray: []
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_FETCHED_OK:
      return {
        ...state,
        allUsersArray: payload,
        isComponentMounted: true,
        isDataFetched: true
      };

    default:
      return state;
  }
};

export default usersReducer;
