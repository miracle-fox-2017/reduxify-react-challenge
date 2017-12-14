import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searching } from './actions/keywordNews'
import './App.css';

class NewsSearch extends Component {
  constructor() {
    super()
    this.state = {
      keyword: ''
    }
  }
  getDataKeyword(keyword) {
    this.setState({
      keyword: keyword
    })

  }
  render() {
    let keyword = this.state.keyword
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search..." onChange={(e) => this.getDataKeyword(e.target.value)} />
        <div className="input-group-btn">
          <Link to="/news/searching">
            <button className="btn btn-default" type="button" onClick={() => this.props.searching(keyword)}>
              Search
              </button>
          </Link>

        </div>
      </div>
    )
  }
}

const mapStateToProps = null
const mapDispatchToProps = (dispatch) => {
  return {
    searching: (keyword) => dispatch(searching(keyword)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSearch)
