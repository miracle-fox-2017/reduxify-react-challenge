export function getNews(newData) {
  return {
    type: 'getNews',
    news: newData
  }
}

export function getHeadline(newBerita){
  return{
    type: 'getHeadline',
    headline: newBerita
  }
}