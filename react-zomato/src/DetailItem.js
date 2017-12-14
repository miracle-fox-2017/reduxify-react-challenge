import React, { Component } from 'react'
import { getDetailRestaurant } from './redux/actions'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'

class DetailItem extends Component {

  getDetailItem () {
    this.props.setDetailItem(this.props.match.params.id)
  }
  render () {
    const tempProps = this.props.detailItem
    return (
      <div>
        {tempProps === ''? (
          <p>Mohon Tunggu Ya</p>
        ) : (
          <Panel header={tempProps.name} bsStyle="primary">
            <img src={tempProps.thumb} alt={tempProps.name}/><br/>
            Rating Tempat Makan:  <label>{JSON.stringify(tempProps.user_rating.rating_text)}</label><br/>
            Harga rata-rata makanan berdua: <label>Rp. {tempProps.average_cost_for_two}</label><br/>
          </Panel>
        )}
      </div>
    )
  }
  componentWillMount() {
    this.getDetailItem()
  }
}

const mapStateToProps = state => {
  return {
    detailItem: state.restauranDetail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDetailItem: (id) => {
      dispatch(getDetailRestaurant(id))
    }
  }
}

const zomatoReact = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailItem)

export default zomatoReact;
