import React from 'react'

class NewDetails extends React.Component {
  constructor () {
    super ()
  }
  render () {
    return (
      <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            {this.props.berita.publishedAt}
            <img src={this.props.berita.urlToImage}/>
            Author : {this.props.berita.author}
          </a>
        </div>
        <div>
        <h3>{this.props.berita.title}</h3>
        Description :
        <div>
          {this.props.berita.description}
        </div>
        </div>
      </div>
    </div>
    )
  }
}

export default NewDetails
