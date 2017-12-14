import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import search from './reducers/searchReducer'
import mainPage from './reducers/mainReducer'
import gameDetail from './reducers/gameDetailReducer'

let appReducers = combineReducers({
  search,
  mainPage,
  gameDetail
})

const middleware = applyMiddleware(logger)

const store = createStore(appReducers, middleware)

export default store
