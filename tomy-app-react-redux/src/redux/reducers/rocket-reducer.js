const initialState = {
  rockets:[]
}

const rocketReducer = (state=initialState,action) => {
  switch(action.type){
    case 'SET_ARTICLE':
      return {...state,rockets:action.payload}
    default:
      return state;
  }
}

export default rocketReducer
