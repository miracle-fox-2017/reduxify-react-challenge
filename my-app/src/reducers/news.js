const initialState = {
  news: [],
  headlineNews: [],
  newsSearch:[]
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'getNews':
      return { ...state, news: action.payload.news }
    case 'getHeadline':
      return { ...state, headlineNews: action.payload.headline }
    case 'getKeyword':
      return { ...state, newsSearch: action.payload.news }
    default:
      return state
  }
}
