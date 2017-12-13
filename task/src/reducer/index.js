import { combineReducers } from 'redux'
import reducerArticleReact from './reducerArticleReact'
import reducerArticles from './reducerArticles'

const rootReducer = combineReducers({
  reducerArticleReact,
  reducerArticles
})

export default rootReducer
