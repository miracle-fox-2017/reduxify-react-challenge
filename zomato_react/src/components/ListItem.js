import React, { Component } from 'react';
import Axios from 'axios'
import { connect } from 'react-redux'
import * as listItemAction from '../actions/listItemAction'

class ListItem extends Component {
  constructor (props) {
    super (props)
    this.state = {
      collectionItem: []
    }
  }
  componentWillMount = () => {
    this.props.listItemRequest(this.props.listItem, this.props.sendCollectionId)
  }
  render () {
    let imgStyle = {
      'height': '300px',
      'backgroundAttachment': 'cover',
      'opacity': '0.5'
    }
    let cardStyle = {
      'marginBottom': '2em'
    }
    let aStyle = {
      'color': 'white'
    }
    return (
      <div className="row">
      {this.props.listItem.map((collectionItem) => {
        return (
          <div className="col-md-3" key={collectionItem.restaurant.id}>
            <div className="card bg-dark text-white" style={cardStyle}>
              <img className="card-img" style={imgStyle} src={collectionItem.restaurant.thumb} alt={collectionItem.restaurant.thumb} />
              <div className="card-img-overlay">
                <h3 className="card-title"><a href={collectionItem.restaurant.name} style={aStyle}>{collectionItem.restaurant.name}</a></h3>
                <p className="card-text">{collectionItem.restaurant.location.address}</p>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listItem: state.listItem.listItem
  }
}

const mapDispatchToProps = (dispatch => {
  return {
    listItemRequest: (listItem, collectionId) => dispatch(listItemAction.listItemRequest(listItem, collectionId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
