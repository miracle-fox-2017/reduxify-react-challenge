import { combineReducers } from 'redux'
import articleReducer from './articleReducer'
import categoryReducer from './categoryReducer'
import { tagReducer, tagReducerError, tagReducerLoading } from './tagReducer'

const rootReducer = combineReducers(
  {
    articleReducer: articleReducer,
    categoryReducer: categoryReducer,
    tagReducer: tagReducer,
    tagReducerError,
    tagReducerLoading
  }
)

export default rootReducer