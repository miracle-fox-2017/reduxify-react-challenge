import React, { Component } from 'react'
// import ArticlesListReact from './ArticlesListReactRedux'
import axios from 'axios'
import store from './store/'
import { AddArticles } from './actions/actionArticles'

class TheArticleReact extends Component {
  constructor () {
    super ()
    this.state = {
      articles: []
    }
    store.subscribe(() => {
      console.log('subscribe', store.getState().reducerArticles)
      this.setState({
        articles: store.getState().reducerArticles
      })
    })
    this.getArticleById = this.getArticleById.bind(this)
  }

  
  getArticleById (id) {
    let article = [] 
    this.state.articles.forEach((item, index) => {
      if(index === id){
        article.push(item)
      } 
    })

    localStorage.setItem('article', JSON.stringify(article[0])) 
  }

  render () {
    return (
      <div>
      adasd
      </div>
    )
  }

componentWillMount() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=the-next-web,the-verge&apiKey=7c22194db6574183a086c357016e6e6f')
    .then(({data}) => {
      store.dispatch(AddArticles(data.articles))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default TheArticleReact