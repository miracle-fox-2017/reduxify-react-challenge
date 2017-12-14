import React, {Component} from 'react'
import store from '../store'
import { searchGet } from '../actions/searchAction'

import GameList from './GameList'

export default class SearchPage extends Component {
  constructor() {
    super()
    this.state = {
      loadingSearch: false,
      searchResult: []
    }

    store.subscribe(() => {
      this.setState({
        loadingSearch: false,
        searchResult: store.getState().search.searchResult || []
      })
    })
  }

  componentWillMount() {
    this.setState({
      loadingSearch: true
    })
    let keyword = this.props.match.params.keyword
    store.dispatch(searchGet(keyword))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loadingSearch: true
    })
    let keyword = nextProps.match.params.keyword
    store.dispatch(searchGet(keyword))
  }

  render() {
    let content = ''
    if(this.state.searchResult.length > 0 && this.state.loadingSearch === false) {
      content = <GameList gameList={this.state.searchResult} />      
    } else {
      if(this.state.loadingSearch === false) {
        content = <h1>Game not found...</h1>
      } else {
        content = <h1>Searching Game...</h1>        
      }
    }
    return(
      <div>
        <p className="title">Search Game</p>
        <p className="subtitle">Search Result</p>
        <div className="content">
          {content}
        </div>
      </div>
    )
  }
}