import React, { Component } from 'react';

class NewsDetail extends Component {
  constructor (props) {
    super()
    this.state = {
      news: props.location.state
    }
  }
  render() {
    return (
      <div>
      <p>{this.state.news.news.author}</p>
      <p>{this.state.news.news.title}</p>
      <img src={this.state.news.news.urlToImage} alt="gambar aja"/>
      <p>{this.state.news.news.description}</p>
      <p>{this.state.news.news.author}</p>
      </div>
    )
  }
}

export default NewsDetail;
