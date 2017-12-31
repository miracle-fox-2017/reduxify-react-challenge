const initialState = {
  users: []
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...state, users: action.payload}
    case 'DELETE_USER':
      let newUsers = state.users.filter((e) => {
        return e.id !== action.payload.id
      })
      return {...state, users: newUsers}
    default:
      return state
  }
}

export default reducer
