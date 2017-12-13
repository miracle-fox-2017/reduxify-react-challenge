import React, { Component } from 'react';
import GameItem from './GameItem'

export default class GameList extends Component {
  render() {
    return(
      <div>
        {this.props.gameList.map((g, i) => {
          return <div>
            <GameItem key={i} gameItem={g}/>
            <br/>
          </div>
        })}
      </div>
    )
  }
}