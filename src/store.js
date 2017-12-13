import { createStore, combineReducers } from 'redux'
import search from './reducers/searchReducer'
import mainPage from './reducers/mainReducer'

let appReducers = combineReducers({
  search,
  mainPage
})

const store = createStore(appReducers)

export default store