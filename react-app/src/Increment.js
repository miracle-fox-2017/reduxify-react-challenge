import React from 'react'
import store, { increment, decrement } from './Store'

class Increment extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter
    }
    store.subscribe( () => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }


  render(){
    return (
      <div>
        <h1 className="title is-1"> a counter: { this.state.counter } </h1>
        <a onClick={ () => store.dispatch(increment) } className="button is-primary">Increment</a>
        <a onClick={ () => store.dispatch(decrement) } className="button is-warning">Decrement</a>
      </div>
    )
  }
}

export default Increment
