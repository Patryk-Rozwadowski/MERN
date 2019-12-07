import { combineReducers } from 'redux';
import { imagesReducer } from './images.reducer';

const rootReducer = combineReducers({ imagesReducer });

export default rootReducer;