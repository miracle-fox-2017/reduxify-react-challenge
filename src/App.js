import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore } from 'redux'

import logo from './logo.svg';
import './App.css';

import IndexPage from './components/IndexPage'
import SinglePage from './components/SinglePage'
import FeaturedSinglePage from './components/FeaturedSinglePage'
import CategoriesPage from './components/CategoriesPage'

import rootReducer from './reducers/'
import store from './store'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      articles: [],
    }
  }

  render () {    
    const linkStyle = {
      textDecoration: 'none',
      color: '#fff'
    }

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">
                <Link style={linkStyle} to="/">React News</Link> |&nbsp;
                <Link style={linkStyle} to="/categories">Categories</Link>
              </h1>

            </header>

            <Route exact path="/" component={IndexPage} />
            <Route exact path="/post" render={() => (<IndexPage/>)} />
            <Route path="/post/:postId" render={(props) => (<FeaturedSinglePage>
              <SinglePage {...props} /></FeaturedSinglePage>)} />
            <Route exact path="/categories" render={() => (<CategoriesPage/>)}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
