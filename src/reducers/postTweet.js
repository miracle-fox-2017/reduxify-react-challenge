const initialState = {
  allphotos: []
}
const postTweet = (state = initialState, action) => {
  console.log(action, 'SAVE')
  switch (action.type) {
    case 'ALL_PHOTOS_FIREBASE':
      state.allphotos = action.photos
      return {...state}
    default:
      return state
  }
}
export default  postTweet