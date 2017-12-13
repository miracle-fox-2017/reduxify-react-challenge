import { createStore } from 'redux'
import { restaurantApp } from './reducers'

const store = createStore(restaurantApp)
export default store
