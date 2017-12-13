const stateDefault = {
  gameDetail: []
}

const mainPage = (state = stateDefault, action) => {
  switch (action.type) {
    case 'GAME_DETAIL': 
      return (Object.assign({}, state, {gameDetail: action.payload}))
    default :
      return state
  }
}

export default mainPage