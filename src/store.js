import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import search from './reducers/searchReducer'
import mainPage from './reducers/mainReducer'
import gameDetail from './reducers/gameDetailReducer'

let appReducers = combineReducers({
  search,
  mainPage,
  gameDetail
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(logger, thunk)

const store = createStore(appReducers, composeEnhancers(middleware))

export default store
