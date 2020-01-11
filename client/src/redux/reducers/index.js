import {combineReducers} from 'redux';
import images from './images.reducer';
import users from './users.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({images, users, userReducer});

export default rootReducer;