const initialState = {
  collections: []
}

const collectionList = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COLLECTIONS':
      state.collections = action.collections
      return {
        ...state
      }
    default:
      return state
  }
}

export default collectionList
