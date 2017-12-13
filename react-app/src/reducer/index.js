import { createStore, combineReducers } from 'redux'
import CounterReducer from './counter'

const rootReducer = combineReducers({
  CounterReducer
})

const counterStore = createStore(CounterReducer)

const reducer = {
  counterStore
}

export default reducer
