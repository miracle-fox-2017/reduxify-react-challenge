//REDUCERS
const initialState = {
  lastArticles: []
}
function reducerArticles(state = initialState, action) {
  switch (action.type){
    case 'ARTICLES' :
      // state = {
      //   articles: action.payload,
      //   lastArticles: [...state, action.payload]
      // }
      state = action.payload
      break;
    default: 
      break;
  }
 console.log('ini reducer non react', state)
  return state
}

export default reducerArticles