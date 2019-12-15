import {combineReducers} from 'redux';
import {images} from './images.reducer';
import {users} from './users.reducer';

const rootReducer = combineReducers({ images, users });

export default rootReducer;