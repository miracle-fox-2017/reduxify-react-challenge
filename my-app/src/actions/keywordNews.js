import axios from 'axios'

export function addKeyword(newData) {
  return {
    type: 'getKeyword',
    payload: {
      news: newData
    }
  }
}

export function searching(keyword) {
  return (dispatch) => {
    axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=39338eeb41a348e5b1d8ce0fbe0906b7`)
      .then((dataNews) => {
        dispatch(addKeyword(dataNews.data.articles))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}