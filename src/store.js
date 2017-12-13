import { createStore, combineReducers } from 'redux'
import search from './reducers/searchReducer'
import mainPage from './reducers/mainReducer'
import gameDetail from './reducers/gameDetailReducer'

let appReducers = combineReducers({
  search,
  mainPage,
  gameDetail
})

const store = createStore(appReducers)

export default store