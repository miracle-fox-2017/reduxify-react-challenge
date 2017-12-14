import {createStore} from 'redux';
import reducer from './reducers';

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Store
const store = createStore(reducer,reduxDev);

export default store;
