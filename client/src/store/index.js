import { createStore, applyMiddleware, compose } from 'redux'
import listReducer from '../reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware (logger, thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function get_heroName(value) {
  return {
    type: 'GET_HERO',
    payload: {
      hero: value
    }
  }
}

const store = createStore(listReducer, composeEnhancers(middleware))

export default store
