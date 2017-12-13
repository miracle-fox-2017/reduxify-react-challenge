import { combineReducers } from 'redux'
import articleReducer from './articleReducer'
import categoryReducer from './categoryReducer'
import tagReducer from './tagReducer'

const rootReducer = combineReducers(
  {
    articleReducer: articleReducer,
    categoryReducer: categoryReducer,
    tagReducer: tagReducer
  }
)

export default rootReducer