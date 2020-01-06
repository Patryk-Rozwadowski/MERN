import {combineReducers} from 'redux';
import images from './images.reducer';
import users from './users.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({images, users, user});

export default rootReducer;