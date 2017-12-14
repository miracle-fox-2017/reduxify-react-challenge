import { createStore, combineReducers, applyMiddleware } from 'redux'
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

const middleware = applyMiddleware(logger, thunk)

const store = createStore(appReducers, middleware)

export default store
