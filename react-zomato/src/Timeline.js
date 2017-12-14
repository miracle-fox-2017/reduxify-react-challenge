import React, { Component } from 'react'
import { connect } from 'react-redux'

import Listitem from './ListItem'

class Timeline extends Component {

  render() {
    const tempProps = this.props.restauranList
      return (
        <div>
        {tempProps[0] === ''? (
          <p>Masukkan Lokasi Anda</p>
        ) : (
          tempProps.map((element, index) => {
            return <Listitem key={index} itemRest={element}/>
          })
        )}
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    restauranList: state.restauranList
  }
}

const TimelineRestauran = connect (
  mapStateToProps,
  null
)(Timeline)

export default TimelineRestauran
