import React from 'react'
// import store, { increment, decrement } from './Store'
import reducer from './reducer'
import { increment, decrement } from './actions/counter'

class Increment extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: reducer.counterStore.getState().counter
    }
    reducer.counterStore.subscribe( () => {
      this.setState({
        counter: reducer.counterStore.getState().counter
      })
    })
  }


  render(){
    return (
      <div>
        <h1 className="title is-1"> a counter: { this.state.counter } </h1>
        <a onClick={ () => reducer.counterStore.dispatch(increment) } className="button is-primary">Increment</a>
        <a onClick={ () => reducer.counterStore.dispatch(decrement) } className="button is-warning">Decrement</a>
      </div>
    )
  }
}

export default Increment
