import axios from 'axios'

const swapi = axios.create({
  baseURL: 'https://swapi.co/api/'
})

export const allHeroes = (heroes) => {
  return {
    type: 'GET_ALL_HEROES',
    payload: heroes
  } 
}

export const allPlanets = (planets) => {
  return {
    type: 'GET_ALL_PLANETS',
    payload: planets
  }
}

export const allPlanetsAsync = () => {
  return (dispatch) => {
    swapi.get('/planets')
    .then(({data}) => {
      if (data.results) {
        dispatch(allPlanets(data.results))
      } else {
        alert('ERROR GET HEROES')
      }
    })
  }
}