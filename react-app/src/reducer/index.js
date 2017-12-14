import { combineReducers } from 'redux'
import CounterReducer from './counter'
import PhotoReducer from './photo'
import UserReducer from './user'

const rootReducer = combineReducers({
  CounterReducer,
  PhotoReducer,
  UserReducer
})

export default rootReducer
