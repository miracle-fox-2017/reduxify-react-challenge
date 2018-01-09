const initialState = {
  news: []
}

const News = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      state.news = action.payload.news
      return {...state}
    default:
      return state
  }
}

export default News
