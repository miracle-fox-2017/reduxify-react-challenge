var initialState = {
  articles: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTICLES":
    state.articles = action.articles
    return {...state}
    default:
      return state
  }
}

export default reducer
