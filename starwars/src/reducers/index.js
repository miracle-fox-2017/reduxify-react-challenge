import {combineReducers} from 'redux'

const heroStarWars = {
  people: [],
  planets: []
}

const heroReducer = (state = heroStarWars, actions) => {
  switch (actions.type) {
    case 'GET_ALL_HEROES':
      console.log('%c ==========================GET_ALL_HEROES', 'background: #222; color: yellow; font-size: 5em')
      state.people = actions.payload
      return {...state}
    case 'GET_ALL_PLANETS':
      console.log('==================================GET_ALL_PLANETS')
      state.planets = actions.payload
      return {...state}
    case 'GET_ALL_PLANETS_ASYNC':
      console.log('===========================GET_ALL_PLANETS_ASYNC');
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