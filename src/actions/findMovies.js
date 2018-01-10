import Axios from 'axios'

export const setMovies = (movies) => {
  return {
    type: 'TO_FIND_ALLMOVIES',
    hasil: movies
  }
}
export const findMovies = (search) => {
  console.log('AKAN DI CARI', search)
  return dispatch => {
    Axios.post(`https://api.themoviedb.org/3/search/movie?api_key=19e89bad298de6dc0f532b07d991632e&language=en-US&query=${search}&page=1&include_adult=false`)
    .then(({data}) => {
      console.log('HASIL CARI', data.results)
      dispatch(setMovies(data.results))
    })
    .catch(err => {
      console.log(err)
    })
  }
}