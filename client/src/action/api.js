import axios from 'axios'

export const get_heroName = (value) => {
  console.log('INI DI ACTION', value);
  return {
    type: 'GET_HERO',
    payload: {
      hero: value
    }
  }
}

export const fetchdotaAPI = () => {
  return (dispatch, getState) => {
    const url = 'http://api.herostats.io/heroes/all'
    axios.get(url)
    .then(({data}) => {
      let temp = []
        for (let idx in data) {
          temp.push(data[idx])
        }
      dispatch(get_heroName(temp))
    })
  }
}
