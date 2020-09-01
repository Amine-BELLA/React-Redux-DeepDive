import { createStore, applyMiddleware } from 'redux';
import rootReducer from './components/reducer/index';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;