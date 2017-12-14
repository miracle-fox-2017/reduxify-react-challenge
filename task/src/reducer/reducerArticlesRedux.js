//REDUCERS
const initialState = {
  lastArticles: []
}
function reducerArticlesRedux(state = initialState, action) {
  switch (action.type){
    case 'tes' :
    console.log('masuk sini react', action.type)
      return {...state, lastArticles: action.payload}
      break;
    case "ARTICLES-REDUX":
    console.log('---------masuk reducer redux', action)
      return {...state, lastArticles: action.payload}
      break;
    default: 
      return state;
  }
}

export default reducerArticlesRedux