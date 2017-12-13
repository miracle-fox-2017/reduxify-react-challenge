var initialState = {
  articles: []
}

function reducer(state = initialState, action) {
  if(action.type === 'GET_ARTICLES') {
    return {...state, articles: action.articles }
  }
}

export default reducer
