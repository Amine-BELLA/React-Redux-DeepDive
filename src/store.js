import {createStore} from 'redux';
import rootReducer from './components/reducer/index';

const store = createStore(rootReducer);

export default store;