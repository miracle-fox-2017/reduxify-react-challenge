const stateDefault = {
  keyword: 'text search...',
  searchResult: []
}

const search = (state = stateDefault, action) => {
  switch (action.type) {
    case 'SEARCH_KEYWORD': 
      return (Object.assign({}, state, {keyword: action.payload}))
    case 'SEARCH_GET':
      return (Object.assign({}, state, {searchResult: action.payload}))
    default :
      return state
  }
}

export default search