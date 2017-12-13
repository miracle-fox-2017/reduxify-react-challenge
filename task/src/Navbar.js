import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'

class Navbar extends React.Component {
  constructor() {
    super ()
    this.state = {
      keyword: ''
    }
  }

  onChangeKey = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  render () {
    const url = `/search/${this.state.keyword}`
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to="/">Articles</Link>
            <Link class="nav-item nav-link" to="/articlesReact">ArticlesReact</Link>
          </div>
        </div>
        <div>
          <input class="form-control mr-sm-2" type="search" placeholder="Search"  name="keyword" onChange={this.onChangeKey}/>
          <Link class="btn btn-outline-success my-2 my-sm-0" to={url}>Search</Link>
        </div>
        <hr/>
      </nav>
  
    </div>
    )
  }
  
}

export default Navbar