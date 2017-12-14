const initialState = {
  news: [],
  headlineNews: []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'getNews':
      return { ...state, news: action.payload.news }
    case 'getHeadline':
      return { ...state, headlineNews: action.payload.headline }
    default:
      return state
  }
}
