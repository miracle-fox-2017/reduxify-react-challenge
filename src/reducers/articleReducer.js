const initialState = {
  articles: []
}

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ARTICLES':
      const newArticles = state.articles.concat(action.payload.articles)

      return { ...state, articles: newArticles }

    default:
      return state
  }
}

export default articleReducer