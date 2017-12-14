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
    let content
    if (this.props.gameList.length > 0) {
      content = <div className="content">
                  <h1 className="ui header">Featured List</h1>
                  <GameList gameList={this.props.gameList} />
                </div>
    } else {
      content = <div className="ui active centered inline loader"></div>
                
    }
    return(
      <div className="ui grid segment">
          {content}
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