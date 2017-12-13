import { combineReducers } from 'redux'
// import store from '../store'
const initialState = {
  team: [],
  hero: []
}

const Dota = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_TEAM':
      return [...state, action.text]
    case 'GET_HERO':
      state.hero = action.payload.hero
      return {...state}
    default:
      return state
  }
}

const listReducer = combineReducers({
  Dota
})

export default listReducer
