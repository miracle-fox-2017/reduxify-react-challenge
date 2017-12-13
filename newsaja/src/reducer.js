var initialState = {
  articles: []
}

function reducer(state = initialState, action) {
  if(action.type === 'GET_ARTICLES') {
    state.articles = action.articles
    return {...state, articles: action.articles }
  }
}

export default reducer
