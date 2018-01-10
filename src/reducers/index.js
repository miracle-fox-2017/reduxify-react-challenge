import {combineReducers} from 'redux'
import postTweet from './postTweet'
import homeInput from './homeInput'
import findMovies from './findMovies'

const exportAll = combineReducers({
  postTweet,
  homeInput,
  findMovies
})

export default exportAll