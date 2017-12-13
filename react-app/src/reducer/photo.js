const initialState = {
  flick: []
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GETFLICK':
      return {...state, flick: action.payload }
    default:
      return state
  }
}

export default reducer
