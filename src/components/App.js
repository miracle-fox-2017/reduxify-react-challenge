import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

import MainPage from './MainPage'
import GameDetail from './GameDetail'
import Navbar from './Navbar'
import SearchPage from './SearchPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="ui container">
            <Navbar/>
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/game/:id" component={GameDetail}/>
                <Route path="/game/search/:keyword" component={SearchPage}/>
              </article>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
