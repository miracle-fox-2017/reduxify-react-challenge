const initialState = {
  news: [],
  headlineNews: []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'getNews':
      state.news = action.news
      return { ...state }
    case 'getHeadline':
      state.headlineNews = action.headline
      return { ...state }
    default:
      return state
  }
}
