import axios from 'axios'

export function getNews(newData) {
  return {
    type: 'getNews',
    payload: {
      news: newData
    }
  }
}

export function getHeadline(newBerita) {
  return {
    type: 'getHeadline',
    payload: {
      headline: newBerita
    }
  }
}

export function fetchHeadlineAsync() {
  return (dispatch) => {
    axios.get('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=39338eeb41a348e5b1d8ce0fbe0906b7')
      .then((dataNews) => {
        dispatch(getHeadline(dataNews.data.articles))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }

}