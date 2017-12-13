import { createStore } from 'redux'

const stateDefault = {
  keyword: 'kosong'
}

const reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'SEARCH_KEYWORD': 
      console.log('masuk 1')
      state.keyword = action.payload
      return state
    default :
      console.log('masuk default')
      return state
  }
}

export let action_search = {
  type: 'SEARCH_KEYWORD',
  payload: 'contoh'
}

const store = createStore(reducer)

export default store