import { createStore, combineReducers } from 'redux'
import search from './reducers/searchReducer'

let appReducers = combineReducers({
  search
})

const store = createStore(appReducers)

export default store