const initialState = {
  restauranList: [''],
  restauranDetail: ''
}

export function restaurantApp( state = initialState, action) {
  switch (action.type) {
    case 'GET_RESTAURANT':
      return {
        ...state,
        restauranList: action.payload,
        restauranDetail: ''
      }
    case 'GET_DETAIL_RESTAURANT':
      return {
        ...state,
        restauranList: [''],
        restauranDetail: action.payload
      }
    default:
      return state
  }
}
