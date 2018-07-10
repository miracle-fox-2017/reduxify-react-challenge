  const initialState = {
    lastArticles: []
  }
  
  function reducerArticleReact(state = initialState, action) {
    if (action.type === 'ARTICLES-REACT-REDUX') {
      return {...state, lastArticles: action.payload}
    }
    return state
  }
  
  export default reducerArticleReact