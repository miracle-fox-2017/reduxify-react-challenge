import { combineReducers } from 'redux'
import reducerArticleReact from './reducerArticleReact'
import reducerArticlesRedux from './reducerArticlesRedux'

const rootReducer = combineReducers({
  reducerArticleReact,
  reducerArticlesRedux
})

export default rootReducer
