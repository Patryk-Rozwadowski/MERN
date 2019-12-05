import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
debugger;

const store = createStore(rootReducer);

export default store;