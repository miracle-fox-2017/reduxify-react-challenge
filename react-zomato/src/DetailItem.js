import React, { Component } from 'react';
import axios from 'axios';
import store from './redux/store'
import { getDetailRestaurant } from './redux/actions'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap';

class DetailItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zomatoItem: {}
    }
  }
  getDetailItem () {
    getDetailRestaurant(this.props.match.params.id, cb => {
      this.props.setDetailItem(cb)
    })
  }

  render () {
    return (
      // <p>Ini detail</p>
      <Panel header={this.state.zomatoItem.name} bsStyle="primary">
        <img src={this.state.zomatoItem.thumb}/><br/>
        Rating Tempat Makan: <label>{JSON.stringify(this.state.zomatoItem.user_rating)}</label><br/>
        Harga rata-rata makanan berdua: <label>Rp. {this.state.zomatoItem.average_cost_for_two}</label><br/>
      </Panel>
    )
  }
  componentWillMount() {
    this.getDetailItem()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      zomatoItem: nextProps.detailItem[0].restauranDetail
    })
  }
}

const mapStateToProps = state => {
  console.log('ini di map', state)
  return {
    detailItem: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDetailItem: (cb) => {
      dispatch(cb)
    }
  }
}

const zomatoReact = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailItem)

export default zomatoReact;
