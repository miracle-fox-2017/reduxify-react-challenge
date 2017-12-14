import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './App.css';

class SearchingResult extends Component {

  render() {
    return (
      <div className="searching">
        <div className="container text-center">
          <button className="btn btn-info"><Link to="/">Back to Home</Link></button>
          {this.props.news.map((berita, index) => {
            return (
              <div key={index} className="panel panel-default text-center">
                <div className="panel-heading">
                  <h2>{berita.title} </h2>
                </div>
                <div className="panel-body">
                  <img src={berita.urlToImage} alt="" />
                  <p>{berita.description}</p>
                  <a href={berita.url}>{berita.url}</a>
                </div>
                <div className="panel-footer">
                  <p> <small> Reported by: {berita.author} </small></p>
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
    news: state.newsSearch
  }
}
const mapDispatchToProps = null
export default connect(mapStateToProps, mapDispatchToProps)(SearchingResult)
