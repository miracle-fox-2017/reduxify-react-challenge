import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'

class Increment extends React.Component {
  constructor(props) {
    super()
  }

  render(){
    return (
      <div className="column is-pulled-left is-8">
        <h1 className="title is-1"> a counter: { this.props.counter } </h1>
        <a onClick={ () => this.props.inc() } className="button is-primary">Increment</a>
        <a onClick={ () => this.props.dcr() } className="button is-warning">Decrement</a>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    counter: state.CounterReducer.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(increment),
    dcr: () => dispatch(decrement)
  }
}

const connectedIncrement = connect(mapStateToProps, mapDispatchToProps)(Increment)
export default connectedIncrement
