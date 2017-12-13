import { createStore } from 'redux'
import listReducer from '../reducer'
export const add_team = {
  type: 'ADD_TEAM'
}

export function get_heroName(value) {
  return {
    type: 'GET_HERO',
    payload: {
      hero: value
    }
  }
}

const store = createStore(listReducer)


export default store
