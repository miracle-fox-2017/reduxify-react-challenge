import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import './App.css';
import Header from './Header'
import NewsList from './NewsList'
import { getHeadline } from './actions/getNews'

class HeadlineNews extends Component {

  componentWillMount() {
    this.getData()
  }
  getData() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=39338eeb41a348e5b1d8ce0fbe0906b7')
      .then((dataNews) => {
        this.props.getHeadline(dataNews.data.articles)
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
  render() {
    return (

      <div className="App">
        <Header />
        <div className="container">
          <button className="btn btn-info">Headline News</button>
          <div className="col-md-12">
            <div className="col-md-2">
            </div>
            <div className="col-md-8">
            {this.props.headlines.map((berita, index) => {
                return <NewsList key={index} news={berita} />
              })}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    headlines: state.headlineNews
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHeadline: (value) => dispatch(getHeadline(value))
  }
}
const connectedHeadlineNews = connect(mapStateToProps, mapDispatchToProps)(HeadlineNews)
export default connectedHeadlineNews
