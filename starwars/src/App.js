import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import CardDetail from './components/CardDetail'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" render={(props) => <CardDetail {...props} />} />
      </div>
    </Router>
    );
  }
}

export default App;
