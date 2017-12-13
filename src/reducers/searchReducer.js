const stateDefault = {
  keyword: 'text search...'
}

const search = (state = stateDefault, action) => {
  switch (action.type) {
    case 'SEARCH_KEYWORD': 
      console.log('masuk 1')
      return (Object.assign({}, state, {keyword: action.payload}))
    default :
      console.log('masuk default')
      return state
  }
}

export default search