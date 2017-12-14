import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/news'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
let store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store