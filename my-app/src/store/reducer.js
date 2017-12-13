const initialState = {
  news: []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'getNews':
      state.news = action.news
      return {...state}
    default:
      return state
  }
}
