import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllGame } from '../actions/mainAction'

import GameList from './GameList'

class MainPage extends Component {
  componentDidMount() {
    this.props.getAllGame()
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
    getAllGame: () => dispatch(getAllGame())
  }
}

const MainPageConnect = connect(mapStateToProps, mapDispatchToProps)(MainPage)
export default MainPageConnect