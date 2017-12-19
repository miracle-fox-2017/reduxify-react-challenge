export const getArticlestechcrunch = (articles) => {
  return {
    type: 'GET_ARTICLES_TECHCRUNCH',
    payload: {
      articles
    }
  }
}
