import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dota from './component/Dota'
import Home from './component/Home'
import axios from 'axios'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {

  constructor () {
    super ()
    this.state = {
      hero: []
    }
  }

  render() {
    return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar heroes={this.state.hero}/>
    </div>
  </Router>
  </Provider>
  )}}

export default App;
