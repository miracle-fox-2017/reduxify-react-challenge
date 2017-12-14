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
      <div className="ui stackable menu">
        <div className="item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/G_Guadalupana-logo.gif" alt="logo"/>
        </div>
        <Link to="/" className="item">Home</Link>
        <div className="right item">
          <div className="ui action input">
            <input type="text" placeholder="Find a Game..." onChange={(e) => this.setKeyword(e)}/>
            <Link to={url} className="ui button primary">
              {buttonSearch}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}