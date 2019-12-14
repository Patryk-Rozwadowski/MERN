import { combineReducers } from 'redux';
import { imagesReducer } from './images.reducer';
import { usersReducer } from './users.reducer';

const rootReducer = combineReducers({ imagesReducer, usersReducer });

export default rootReducer;