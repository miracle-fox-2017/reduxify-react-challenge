import { combineReducers } from 'redux'
import Dota from './HeroRedux'
import News from './News'

const listReducer = combineReducers({
  Dota,
  News
})

export default listReducer
