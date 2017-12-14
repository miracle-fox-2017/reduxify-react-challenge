import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NewsSearch from './NewsSearch'
import './App.css';

class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">
          <Link to="/">Dunia dalam Berita </Link>
        </h1>
        <form>
          <NewsSearch />
        </form>
      </header>
        )
  }

}

export default Header
