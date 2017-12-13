import { createStore, combineReducers } from 'redux'
import CounterReducer from './counter'
import PhotoReducer from './photo'

const rootReducer = combineReducers({
  CounterReducer,
  PhotoReducer
})

const counterStore = createStore(CounterReducer)
const photoStore = createStore(PhotoReducer)

const reducer = {
  counterStore,
  photoStore
}

export default reducer
