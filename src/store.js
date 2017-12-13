import { createStore } from 'redux'

const store = createStore(
  articleReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const initialState = {
  articles: []
}

function articleReducer (state = initialState, action)  {
  switch (action.type) {
    case 'GET_ARTICLES':
      const newArticles = state.articles.concat(action.payload.articles)

      return { ...state, articles: newArticles}
  
    default:
      return state
  }
}

export const getArticles = (articles) => {
  return {
    type: 'GET_ARTICLES',
    payload: {
      articles
    }
  }
}

export default store