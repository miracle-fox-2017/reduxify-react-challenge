import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Header from './Header'
import NewsList from './NewsList'
import { getHeadline, fetchHeadlineAsync } from './actions/getNews'

class HeadlineNews extends Component {

  componentWillMount() {
    this.props.fetchHeadline()
  }
  render() {
    return (

      <div className="headline">
        <Header />
        <div className="container text-center">
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
    getHeadline: (news) => dispatch(getHeadline(news)),
    fetchHeadline: () => dispatch(fetchHeadlineAsync())
  }
}
const connectedHeadlineNews = connect(mapStateToProps, mapDispatchToProps)(HeadlineNews)
export default connectedHeadlineNews
