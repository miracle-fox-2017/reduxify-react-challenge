const initialState = {
  flick: []
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GETFLICK':
    console.log('direducer', action.payload)
      return {...state, flick: action.payload }
    default:
      return state
  }
}

export default reducer
