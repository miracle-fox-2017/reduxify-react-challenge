import { createStore } from 'redux'

const initialState = {
  counter: 1000000
}

//action
export const increment = {
  type: 'INCREMENT'
}

export const decrement = {
  type: 'DECREMENT'
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: state.counter + 1}
    case 'DECREMENT':
      return {...state, counter: state.counter - 1}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
