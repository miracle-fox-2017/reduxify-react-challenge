import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as collectionsAction from '../actions/collectionsAction'

class MainList extends Component {
  constructor (props) {
    super (props)
  }
  componentWillMount = () => {
    this.props.collectionsRequest()
  }
  sendCollectionId = (collectionId) => {
    this.props.sendCollectionsData(collectionId)
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
      {this.props.collections.map((collectionItem) => {
        return (
          <div className="col-md-3" key={collectionItem.collection.collection_id}>
            <div className="card bg-dark text-white" style={cardStyle}>
              <img className="card-img" style={imgStyle} src={collectionItem.collection.image_url} alt={collectionItem.collection.image_url} />
              <div className="card-img-overlay">
                <h3 className="card-title"><a href={collectionItem.collection.url} style={aStyle}>{collectionItem.collection.title}</a></h3>
                <p className="card-text">{collectionItem.collection.description}</p>
                <p className="card-text">Last updated 3 mins ago</p>
                <button type="button" className="btn btn-primary" onClick={() => this.sendCollectionId(collectionItem.collection.collection_id)}>See Restaurants</button>
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
  if (state.collectionList.collections !== undefined ) {
    return {
      collections: state.collectionList.collections
    }
  } else {
    return {
      collections: []
    }
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    collectionsRequest: collections => dispatch(collectionsAction.collectionsRequest(collections))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainList)
