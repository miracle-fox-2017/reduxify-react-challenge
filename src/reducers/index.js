import { combineReducers } from 'redux'
import articleReducer from './articleReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers(
  {
    articleReducer: articleReducer,
    categoryReducer: categoryReducer
  }
)

export default rootReducer