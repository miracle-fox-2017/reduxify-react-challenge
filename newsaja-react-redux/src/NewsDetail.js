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
      <div className="container" style={{width: 660+"px"}}>
        <div className="card border-dark mb-3">
          <h3 className="card-header">{this.state.news.news.title}</h3>
          <div className="card-body">
            <h5 className="card-title">{this.state.news.news.description}</h5>
            <h6 className="card-subtitle text-muted">{this.state.news.news.author}</h6>
          </div>
          <div className='container'>
          <img style={{width: 600, marginBottom: 20+"px"}} src={this.state.news.news.urlToImage} alt="Card image" />
          </div>
        </div>
      </div>
    )
  }
}

export default NewsDetail;
