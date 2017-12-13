  const initialState = {
    lastArticles: []
  }
  
  function reducerArticles(state = initialState, action) {
    if (action.type === 'ARTICLES') {
      return {...state, articles: action.payload}
    }
    
    return state
  }
  
  export default reducerArticles