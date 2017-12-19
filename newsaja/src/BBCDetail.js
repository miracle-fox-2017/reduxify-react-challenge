import React, { Component } from 'react';

class BBCDetail extends Component {
  constructor (props) {
    super()
    this.state = {
      news: props.location.state
    }
    console.log('dari con bbcdetail', this.state.news)
  }
  render() {
    return (
      <div className="container">
      <div className="card mb-3">
        <h3 className="card-header">{this.state.news.news.title}</h3>
        <div className="card-body">
          <h5 className="card-title">{this.state.news.news.description}</h5>
          <h6 className="card-subtitle text-muted"><a href={(this.state.news.news.url)}>continue reading</a></h6>
        </div>
        < img style={{height: 600+'px', width: 1000, display: 'block', marginLeft: 50}} src={this.state.news.news.urlToImage} alt="Card" />
        <div className="card-footer text-muted">
          {this.state.news.news.publishedAt}
        </div>
      </div>
      </div>
    )
  }
}

export default BBCDetail;
