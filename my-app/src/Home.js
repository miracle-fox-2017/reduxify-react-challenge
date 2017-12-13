import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import NewsList from './NewsList'
import Header from './Header'
import Sidebar from './Sidebar'
import { createStore } from 'redux'


function rootReducer(state = [], action) {
  switch (action.type) {
    case 'getArticle':
      return state.concat([action.news]);
    default:
      return state
  }
}
let store = createStore(rootReducer)



class Home extends Component {
  constructor() {
    super()
    this.state = {
      news:[]
    }
    store.subscribe(() => {
      console.log('subscribe to store')
      console.log(store.getState())
    })
  }
  componentWillMount() {
    this.getData()
    this.setState({
      news: store.getState()
    })
  }
  getData() {
    axios.get('https://newsapi.org/v2/everything?sources=al-jazeera-english&apiKey=39338eeb41a348e5b1d8ce0fbe0906b7')
      .then((dataNews) => {
        store.dispatch({ type: 'getArticle', news: dataNews.data.articles })
        // console.log(dataNews)
        // this.setState({
        //   news: dataNews.data.articles
        // })
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
