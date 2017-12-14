import React from 'react'
import fetch from 'node-fetch'
import store, { AddArticles } from './store/'
import ArticleList from './ArticleList'

class SearchArticle extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

 async getFetch(){
  const response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.match.params.keyword}&apiKey=7c22194db6574183a086c357016e6e6f`)
  const data = await response.json()
  data.articles
  }

  componentWillMount() {
    fetch(`https://newsapi.org/v2/everything?q=${this.props.match.params.keyword}&apiKey=7c22194db6574183a086c357016e6e6f`)
    .then(res => {
      return res.json()
    }).then(({articles}) => {
      this.setState({
        articles: articles
      })
    })
  }

  render () {
    return (
      <div>
      <ArticleList articles = {this.state.articles} />
      </div>
    )
  }

  
}

export default SearchArticle