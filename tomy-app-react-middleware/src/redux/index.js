import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);

// Store
const store = createStore(reducer,composeEnhancers(middleware));

export default store;
