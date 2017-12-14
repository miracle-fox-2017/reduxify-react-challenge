import React, { Component } from 'react';
import GameItem from './GameItem'

export default class GameList extends Component {
  render() {
    return(
      <div>
        {this.props.gameList.map((g, i) => {
          return <GameItem key={i} gameItem={g}/>
        })}
      </div>
    )
  }
}