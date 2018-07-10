import { createStore, applyMiddleware } from 'redux'
import articles from '../reducer'
import logger from 'redux-logger' 
import thunk from 'redux-thunk'

const middleware = applyMiddleware(logger, thunk)
const store = createStore(articles, middleware)

export default store