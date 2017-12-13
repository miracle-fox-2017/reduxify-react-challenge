const initialState = {
  categories: []
}

function categoryReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      const newCategories = state.categories.concat(action.payload.categories)

      return {...state, categories: newCategories}  

    default:
      return state
  }
}

export default categoryReducer