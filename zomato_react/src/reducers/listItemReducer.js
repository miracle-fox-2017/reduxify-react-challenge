const initialState = {
  listItem: []
}

const listItem = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_ITEM':
      state.listItem = action.listItem
      return {
        ...state
      }
    default:
      return state
  }
}

export default listItem
