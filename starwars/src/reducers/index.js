import {combineReducers} from 'redux'

const heroStarWars = {
  people: []
}

const heroReducer = (state = heroStarWars, actions) => {
  console.log('=============================',actions)
  switch (actions.type) {
    case 'GET_ALL_HEROES':
      console.log('==================================GET_ALL_HEROES')
      state.people = actions.payload
      return state.people
    default:
      console.log('==================================DEFAULT STATE')
      return state;
  }
}

const hero = combineReducers({
  heroReducer
})

export default hero