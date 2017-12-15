import React, { Component } from 'react';
import axios from 'axios'
import {getArticlestechcrunch} from './actions/techcrunch'
import {Link} from 'react-router-dom'
import store from './store/store'

class Techcrunch extends Component {

  constructor() {
    super()

    this.state = {
      articles: [],
      search: ''
    }

    console.log(this.state.search)

    store.subscribe(() => {
      this.setState({
        articles: store.getState().techcrunchReducer.techcrunchArticles
      })
    })
  }

  handleChange = (e) => {
    axios.get(`https://newsapi.org/v2/everything?q=${e.target.value}&apiKey=5981474fde55432a9656bea68c9267bd`)
         .then(({data}) => {
           store.dispatch(getArticlestechcrunch(data.articles))
         })
         .catch((err) => {
           console.log(err)
         })
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <form style={{width: 60+"rem", marginBottom: 5+"rem", marginTop: 3+"rem"}}>
          <fieldset>
            <legend>Seacrh News</legend>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Enter keyword</label>
              <input name="search" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="keyword" onChange={this.handleChange} />
            </div>
          </fieldset>
        </form>
      </div>
      <div className="row">
      {this.state.articles.map((article, index) => {
        return(
          <div className="card text-white bg-primary mb-3" style={{width: 60+"rem"}} key={index}>
            <div className="card-header">{article.author}</div>
            <div className="card-body">
            <h4 className="card-title">
            <Link to={{pathname: `/cari/${article.url}`, state: {news: {
                    author: article.author,
                    description: article.description,
                    publishedAt: article.publishedAt,
                    title: article.title,
                    urlToImage: article.urlToImage,
                    url: article.url
                  }}}} style= {{color: "white"}}>
                  {article.title}
            </Link>
            </h4>
            <p className="card-text">{article.publishedAt}.</p>
            </div>
          </div>
        )
      })}
      </div>
      </div>
    )
  }
}

export default Techcrunch;
