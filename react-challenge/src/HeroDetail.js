import React, { Component } from 'react';
import { Route } from 'react-router-dom'
export default class HeroDetail extends Component {
  constructor (props) {
    super()
    // console.log(props.location.pathname)
    this.state = {
      heroData: props.location.state.heroData,
      pathName : props.location.pathname.split('/')[2]
    }
  }
  
  componentWillReceiveProps (nextProp) {
    this.setState({
      heroData: nextProp.location.state.heroData
    })
  }
  
  render() {
    return (
      <div>
        {(Number(this.state.pathName) + 1) === this.state.heroData.ID ? this.showDetails() : console.log()}
      </div>
    )
  }
  
  showDetails () {
    return (
      <div className="heroDetails">
        <h3>Movespeed : {this.state.heroData.Movespeed}</h3>
        <h3>HP : {this.state.heroData.HP}</h3>
        <h3>Mana : {this.state.heroData.Mana}</h3>
        <h3>BaseStr : {this.state.heroData.BaseStr}</h3>
        <h3>BaseAgi : {this.state.heroData.BaseAgi}</h3>
        <h3>BaseInt : {this.state.heroData.BaseInt}</h3>
      </div>
    )
  }
  
}
