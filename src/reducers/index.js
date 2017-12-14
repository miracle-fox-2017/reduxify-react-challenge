import {combineReducers} from 'redux'
import postTweet from './postTweet'
import homeInput from './homeInput'

const exportAll = combineReducers({
  postTweet,
  homeInput
})

export default exportAll