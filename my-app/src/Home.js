import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Link } from 'react-router-dom'
import NewsList from './NewsList'
import NewsSearch from './NewsSearch'
import Header from './Header'
import Sidebar from './Sidebar'
import store from './store'
import { getNews } from './actions/getNews'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
    store.subscribe(() => {
      this.setState({
        news: store.getState().news
      })
    })
  }
  componentWillMount() {
    this.getData()
  }
  getData() {
    axios.get('https://newsapi.org/v2/everything?sources=al-jazeera-english&apiKey=39338eeb41a348e5b1d8ce0fbe0906b7')
      .then((dataNews) => {
        store.dispatch(getNews(dataNews.data.articles))
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
          <button className="btn btn-info">
            <Link to="/news/headline">
              Headline News
            </Link>
          </button>
          <form>
            <NewsSearch />
          </form>
          <div className="col-md-12">
            <div className="col-md-4">
              <div className="well">
                <h3>News List</h3>
                <hr />
                {this.state.news.map((berita, index) => {
                  return <Sidebar key={index} news={berita} />
                })}
              </div>
            </div>
            <div className="col-md-8">
              {this.state.news.map((berita, index) => {
                return <NewsList key={index} news={berita} />
              })}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home
