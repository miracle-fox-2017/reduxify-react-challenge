
// console.log(getPhotos)

const initialState = {
  allPhotos: []
}
export default (state = initialState, action) => {
  // console.log('KAPAN MASUK SINI', action)
  switch (action.type) {
    case 'ALL_PHOTOS':
      state.allPhotos = action.dataPhotos
      return {...state} 
  
    default:
      break;
  }
}