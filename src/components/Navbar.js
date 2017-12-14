import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store from '../store.js'
import {searchKeyword} from '../actions/searchAction'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingSearch: false,
      keyword: ''
    }
    store.subscribe(() => {
      // console.log(store.getState().search.keyword)
      this.setState({
        keyword: store.getState().search.keyword
      })
    })
  }

  setKeyword(event) {
    store.dispatch(searchKeyword(event.target.value))
  }

  render() {
    const url = '/game/search/'+this.state.keyword

    let buttonSearch = null;
    if (this.state.loadingSearch) {
      buttonSearch = <div className="button is-danger is-loading">Loading</div>;
    } else {
      buttonSearch = <div className="button is-danger">Search</div>;
    }

    return (
      <nav className="navbar" aria-label="dropdown navigation">
        <div className="navbar-start">
          <div className="navbar-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_%28rapper%29_Logo.png" alt="logo" width="112" height="28"/>
          </div>
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="control">
              <input className="input" type="text" placeholder="Find a Game" onChange={(e) => this.setKeyword(e)}/>
            </div>
            <Link to={url} className="control">
              {buttonSearch}
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}