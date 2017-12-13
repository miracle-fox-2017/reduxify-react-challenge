export const GET_ARTICLES = 'GET_ARTICLES'

export function getArticles(articles) {
  return {
    type: GET_ARTICLES,
    articles: articles
  }
}
