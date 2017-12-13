import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'

import './App.css';
import HomePage from './components/HomePage'
import CardDetail from './components/CardDetail'
import Planets from './components/Planet'
import Headers from './components/Headers'
import PlanetDetail from './components/PlanetDetail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
              <Headers />
              <Route exact path="/" component={HomePage} />
              <Route path="/detail/:id" render={(props) => <CardDetail {...props} />} />
              <Route path="/planets" component={Planets} />
              <Route path="/planets/detail/:id" render={(props) => <PlanetDetail {...props} />} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
