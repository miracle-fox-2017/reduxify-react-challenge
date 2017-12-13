const stateDefault = {
  keyword: 'text search...'
}

const search = (state = stateDefault, action) => {
  switch (action.type) {
    case 'SEARCH_KEYWORD': 
      console.log('masuk 1')
      state.keyword = action.payload
      return state
    default :
      console.log('masuk default')
      return state
  }
}

export default search