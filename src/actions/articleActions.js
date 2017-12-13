const getArticles = (articles) => {
  return {
    type: 'GET_ARTICLES',
    payload: {
      articles
    }
  }
}