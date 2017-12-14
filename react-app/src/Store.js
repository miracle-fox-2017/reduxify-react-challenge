import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, middleware)

export default store
