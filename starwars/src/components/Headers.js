import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../starwarslogo.png';

class Headers extends Component {

  render() {
    return (
      <header className="App-header">
        <ul>
          <Link to="/">Home</Link>
        <img src={logo} className="App-logo" alt="logo" />
          <Link to="/planets">Planet</Link>
        </ul>
      </header>
    )
  }
}

export default Headers