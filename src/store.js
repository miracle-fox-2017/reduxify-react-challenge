import { createStore } from 'redux'
import rootReducer from './reducers'
import articleActions from './actions/articleActions'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const initialState = {
  articles: []
}

export const getArticles = (articles) => {
  return {
    type: 'GET_ARTICLES',
    payload: {
      articles
    }
  }
} 

// export const getArticles = articleActions.getArticles

export default store