import axios from 'axios'

export function getArticles(articles) {
  return {
    type: "GET_ARTICLES",
    articles: articles
  }
}

export function fetchArticles() {
  return dispatch => {
    axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5981474fde55432a9656bea68c9267bd')
    .then(({data}) => {
      console.log('yihaa', data.articles)
      dispatch(getArticles(data.articles))
    })
  }
}
