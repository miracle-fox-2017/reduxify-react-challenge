import React, { Component } from 'react';
import store from './redux/store'
import { Panel } from 'react-bootstrap';

import Listitem from './ListItem'

class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurantList: ['']
    }
  }
  render() {
    const tempProps = this.state.restaurantList
    console.log('ini di render', store.getState().restauranList)
      return (
        <div>
        {tempProps[tempProps.length - 1] === ''? (
          <p>Masukkan Lokasi Anda</p>
        ) : (
          // <p>Ada Isi</p>
          tempProps.map((element, index) => {
            return <Listitem key={index} itemRest={element}/>
          })
        )}
      </div>
      );
  }
  componentWillMount(){
    store.subscribe(() => {
      console.log('ini didalam subscribe',store.getState()[store.getState().length - 1])
      this.setState({
        restaurantList: store.getState()[store.getState().length - 1].restauranList
      })
    })
  }
}

export default Timeline;
