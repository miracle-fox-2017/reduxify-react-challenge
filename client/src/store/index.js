import { createStore } from 'redux'
import listReducer from '../reducer'

export function get_heroName(value) {
  console.log('INI DI STORE', value);
  return {
    type: 'GET_HERO',
    payload: {
      hero: value
    }
  }
}

const store = createStore(listReducer)

export default store
