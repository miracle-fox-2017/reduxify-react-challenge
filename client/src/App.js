import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dota from './Dota'
import Home from './Home'
import axios from 'axios'
import Navbar from './Navbar'
class App extends Component {

  constructor () {
    super ()
    this.state = {
      hero: []
    }
  }

  render() {
    return (
    <Router>
    <div className="App">
      <Navbar heroes={this.state.hero}/>
    </div>
  </Router>
  )}}

export default App;
