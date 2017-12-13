const stateDefault = {
  gameList: []
}

const mainPage = (state = stateDefault, action) => {
  switch (action.type) {
    case 'GAME_LOADER': 
      return (Object.assign({}, state, {gameList: action.payload}))
    default :
      return state
  }
}

export default mainPage