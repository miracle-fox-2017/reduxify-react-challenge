import React, { Component } from 'react'
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'
import { connect } from 'react-redux'
import { gameLoader } from '../actions/mainAction'

import GameList from './GameList'

class MainPage extends Component {
  componentWillMount() {
    axios.get('https://www.giantbomb.com/api/games/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&filter=expected_release_year:2017&limit=20')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let gameList = jsonObj.response.results.game
      this.props.gameLoader(gameList)
    })
  }

  searchResult(searchResult) {
    this.setState({
      gameList: searchResult
    })
  }

  render() {
    return(
      <div>
        <p className="title">Game List</p>
        <p className="subtitle">Featured Game</p>
        <div className="content">
          <GameList gameList={this.props.gameList} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameList: state.mainPage.gameList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gameLoader: (v) => dispatch(gameLoader(v))
  }
}

const MainPageConnect = connect(mapStateToProps, mapDispatchToProps)(MainPage)
export default MainPageConnect