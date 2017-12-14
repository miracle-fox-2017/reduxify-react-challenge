import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { restaurantApp } from './reducers'

const middleware = applyMiddleware(thunk)
export const store = createStore(restaurantApp, middleware)
