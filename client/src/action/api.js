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

export const get_news = (value) => {
  console.log('INI DI ACTION', value);
  return {
    type: 'GET_NEWS',
    payload: {
      news: value
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
    .catch(err => {
      console.log(err);
    })
  }
}

export const fetchNewsAPI = () => {
  return (dispatch, getState) => {
    const url = 'http://beta.newsapi.org/v2/everything?q=apple&from=2017-12-13&to=2017-12-13&sortBy=popularity&apiKey=6cbcfa7b1a324dd9907486a7bfcb51c7'
    axios.get(url)
    .then(({data}) => {
      console.log('INI API NEWS', data);
      dispatch(get_news(data.articles))
    })
    .catch(err => {
      console.log(err);
    })
  }
}
