import React, {Component} from 'react'
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'
import store from '../store'
import { action_search_get } from '../actions/searchAction'

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
    axios.get('https://www.giantbomb.com/api/search/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&query='+keyword+'&resources=game')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let searchResult = jsonObj.response.results.game
      store.dispatch(action_search_get(searchResult))
    })
  }

  render() {
    let content = ''
    if(this.state.searchResult.length > 0 && this.state.loadingSearch == false) {
      content = <GameList gameList={this.state.searchResult} />      
    } else {
      if(this.state.loadingSearch == false) {
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