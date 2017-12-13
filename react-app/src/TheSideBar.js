import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import reducer from './reducer'

console.log(reducer.photoStore.getState())
const style = {
  overflowY: 'auto',
  height: '90vh',
  direction: 'rtl',
  textAlign: 'left'
}

class TheSideBar extends Component {
  constructor(props){
    super()
    this.state = {
      flickr: reducer.photoStore.getState().flick
    }

    reducer.photoStore.subscribe( () => {
      this.setState({
        flickr: reducer.photoStore.getState().flick
      })
    })
  }

  render() {
    return (
      <div style={style} className="column is-2">
        <ul>
          {this.state.flickr.map((item, i) => {
            return (
              <li key={i}><Link to={`/flick/${item.farm}/${item.server}/${item.id}/${item.secret}`}><img src={ `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_s.jpg` } alt=''/></Link></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TheSideBar
