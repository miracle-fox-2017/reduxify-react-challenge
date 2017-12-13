import {combineReducers} from 'redux'

const heroStarWars = {
  people: [],
  planets: []
}

const heroReducer = (state = heroStarWars, actions) => {
  switch (actions.type) {
    case 'GET_ALL_HEROES':
      console.log('==================================GET_ALL_HEROES')
      state.people = actions.payload
      return {...state}
    case 'GET_ALL_PLANETS':
      console.log('==================================GET_ALL_PLANETS')
      state.planets = actions.payload
      return {...state}
    default:
      console.log('==================================DEFAULT STATE')
      return state;
  }
}


const hero = combineReducers({
  heroReducer
})

export default hero