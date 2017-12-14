import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class NewsSearch extends Component {
  constructor() {
    super()
    this.state = {
      keyword: ''
    }
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-btn">
          <button className="btn btn-default" type="button">
            <Link to="/news/result/:searching">
              <i className="glyphicon glyphicon-search"></i>
            </Link>
          </button>
        </div>
      </div>
    )
  }

}

export default NewsSearch
