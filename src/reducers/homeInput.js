const initialState = {
  allPhotos: []
}
const homeInput = (state = initialState, action) => {
  // console.log('KAPAN MASUK SINI', action)
  switch (action.type) {
    case 'ALL_PHOTOS':
      state.allPhotos = action.dataPhotos
      return {...state}
    case 'SAVE_PHOTO':
      state.allPhotos.concat(action.newPhoto)
      return {...state}
    default:
      break;
  }
}

export default homeInput