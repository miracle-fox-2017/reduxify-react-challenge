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
    let content
    if(this.state.searchResult.length > 0 && this.state.loadingSearch === false) {
      content = <div className="content">
                  <h1 className="ui header">Result Game</h1>
                  <GameList gameList={this.state.searchResult}/>      
                </div> 
    } else {
      if(this.state.loadingSearch === false) {
        content = <div className="content">
                    <h1>Game not found...</h1>
                  </div>
      } else {
        content = <div className="ui active centered inline loader"></div>
      }
    }
    return(
      <div className="ui grid segment">
        {content}
      </div>
    )
  }
}