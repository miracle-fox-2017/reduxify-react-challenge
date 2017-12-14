import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class GameItem extends Component {
  handeDate(str) {
    if(!str) return ''
    let date = new Date(str)

    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  render() {
    const url = '/game/'+this.props.gameItem.id

    return (
      <Link to={url} className="card">
        <div className="image">
          <img src={this.props.gameItem.image.small_url} alt="poster"/>
        </div>
        <div className="content">
          <div className="header">{this.props.gameItem.name}</div>
          <div className="meta">
            <i>{this.props.gameItem.aliases}</i>
          </div>
          <div className="description">
          {this.props.gameItem.deck}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
          {this.handeDate(this.props.gameItem.original_release_date)}
          </span>
          <span>
            <i className="calendar icon"></i>
            Release:
          </span>
        </div>
      </Link>
    )
  }
}