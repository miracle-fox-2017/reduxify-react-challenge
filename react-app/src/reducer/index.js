import { combineReducers } from 'redux'
import CounterReducer from './counter'
import PhotoReducer from './photo'

const rootReducer = combineReducers({
  CounterReducer,
  PhotoReducer
})

export default rootReducer
