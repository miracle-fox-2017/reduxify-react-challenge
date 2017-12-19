import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchnewsbbc} from './actions/bbc'
import {Link} from 'react-router-dom'

class BBC extends Component {

  componentWillMount() {
    this.props.fetchnewsbbc()
    console.log('willm', this.props.articles)
  }

  render() {
    return (
      <div className="container" style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
      <div className="row">
      {this.props.articles.map((article, index) => {
        return(
          <div className="card text-white bg-primary mb-3" style={{width: 60+"rem"}} key={index}>
            <div className="card-header">{article.author}</div>
            <div className="card-body">
            <h4 className="card-title">
            <Link to={{pathname: `/bbc/${article.url}`, state: {news: {
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

const mapStateToProps = (state) => {
  return {
    articles: state.bbcReducer.bbcArticles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchnewsbbc: () => dispatch(fetchnewsbbc())
  }
}

const connectedBBC = connect(mapStateToProps, mapDispatchToProps)(BBC)
console.log('sasas', connectedBBC)
export default connectedBBC;
