const initialState = {
  hero: []
}

const Dota = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_HERO':
      state.hero = action.payload.hero
      return {...state}
    default:
      return state
  }
}

export default Dota
