const initialState = {
  allphotos: []
}
const postTweet = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PHOTOS_FIREBASE':
      state.allphotos = action.photos
      return {...state}
    default:
      return state
  }
}
export default  postTweet