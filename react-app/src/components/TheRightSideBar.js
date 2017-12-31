import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const style = {
  overflowY: 'auto',
  height: '90vh',
  direction: 'ltl',
  textAlign: 'right'
}

class TheRightSideBar extends Component {
  constructor(props){
    super()
  }

  render(){
    return (
      <div style={style} className="column is-2">
        <ul>
          {this.props.photo.map((item, i) => {
            return (
              <li key={i}><Link to={`/flick/${item.farm}/${item.server}/${item.id}/${item.secret}`}><img src={ `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_s.jpg` } alt=''/></Link></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photo: state.PhotoReducer.rightFlick
  }
}

const connectedRightSideBar = connect(mapStateToProps, null)(TheRightSideBar)
export default connectedRightSideBar
