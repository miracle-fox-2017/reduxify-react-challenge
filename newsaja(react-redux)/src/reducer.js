var initialState = {
  articles: []
}

function reducer(state = initialState, action) {
  if(action.type === 'GET_ARTICLES') {
    state.articles = action.articles
    return state.articles
  }
}

export default reducer
