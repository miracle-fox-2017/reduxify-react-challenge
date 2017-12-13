export function getNews(newData) {
  return {
    type: 'getNews',
    news: newData
  }
}