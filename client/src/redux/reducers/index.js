import {combineReducers} from 'redux';

import imagesReducer from './images.reducer';
import usersReducer from './users.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({imagesReducer, usersReducer, userReducer});

export default rootReducer;