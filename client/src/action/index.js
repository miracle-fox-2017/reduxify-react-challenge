import axios from 'axios'
import store, { get_ReactHeroName } from './store/indexReact'

export function getHeroDota() {
  axios.get('http://api.herostats.io/heroes/all')
  .then(response => {
    console.log('ini di ACTION', response);
    let temp = []
    for (var index in response.data) {
        temp.push(response.data[index])
    }
      store.dispatch(get_ReactHeroName(temp))
  })
  .catch((error) => {
    console.log(error);
  })
}
