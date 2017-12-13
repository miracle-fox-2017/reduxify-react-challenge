import React from 'react'
import axios from 'axios'
import store, { AddArticles } from './store/'
import ArticleList from './ArticleList'

class SearchArticle extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }
  
  componentWillMount() {
    console.log(this.props.match.params.keyword)
    axios.get(`https://newsapi.org/v2/everything?q=${this.props.match.params.keyword}&apiKey=7c22194db6574183a086c357016e6e6f`)
    .then(({data}) => {
      this.setState({
        articles: data.articles
      })
      console.log(this.state.article)
    })
    .catch(function (error) {
      console.log(error);
    });
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