const initialState = {
  hasilMovies: []
}
const findMovies = (state = initialState, action) => {
  console.log('HAYO INI APA', action.hasil)
  switch (action.type) {
    case 'TO_FIND_ALLMOVIES':
      state.hasilMovies = action.hasil
      return {...state}
    default:
      return state
  }
}
export default  findMovies