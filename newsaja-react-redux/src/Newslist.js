import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Newslist extends Component {
  render() {
    return (
      <div>
        <div className="card-header">{this.props.article.author}</div>
        <div className="card-body text-success">
          <h4 className="card-title">
            <Link to={{pathname: this.props.article.url, state: {news: {
                    author: this.props.article.author,
                    description: this.props.article.description,
                    publishedAt: this.props.article.publishedAt,
                    title: this.props.article.title,
                    urlToImage: this.props.article.urlToImage,
                    url: this.props.article.url
                  }}}} style= {{color: "white"}}>{this.props.article.title}
            </Link>
          </h4>
        </div>
      </div>
    )
  }
}

export default Newslist;
