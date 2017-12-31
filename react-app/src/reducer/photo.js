const initialState = {
  flick: [],
  rightFlick: []
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GETFLICK':
      return {...state, flick: action.payload }
    case 'RIGHTFLICK':
      return {...state, rightFlick: action.payload}
    default:
      return state
  }
}

export default reducer
