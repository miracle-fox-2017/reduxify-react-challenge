import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { get_heroName, fetchdotaAPI } from '../action/api'
import logo from '../dota2.png';
import HeroReact from './HeroReact'

class HomeReactRedux extends Component {
  constructor (){
    super ()
    this.state = {
      hero: []
    }
  }
  componentWillMount() {
    this.props.fetchdotaAPI()
  }

  render () {
    return (
        <div>
          <h1><img src={logo} className="App-logo" alt="logo"/> DOTA HERO WITH REACT-REDUX <img src={logo} className="App-logo" alt="logo"/></h1>
          <table className="table" border="2px">
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Name</th>
                <th>HP</th>
                <th>Mana</th>
                <th>Armor</th>
                <th>MaxDmg</th>
                <th>MinDmg</th>
                <th>Range</th>
                <th>Legs</th>
                <th>BaseStr</th>
                <th>BaseAgi</th>
                <th>BaseInt</th>
                <th>Movespeed</th>
                <th>HPRegen</th>
                <th>CastPoint</th>
                <th>CastSwing</th>
                <th>DayVision</th>
                <th>IntGain</th>
                <th>Alignment</th>
                <th>PrimaryStat</th>
              </tr>
            </thead>
               {this.props.hero.map((d,i) => {
                 return (<HeroReact hero={d} key={i}/>)
               })}
         </table>
        </div>
    )
  }
}

const mapAction = (dispatch) => {
  return {
    fetchdotaAPI: (payload) => dispatch(fetchdotaAPI(payload))
  }
}

const mapState = (state) => {
  console.log('INI DI MAP STATE', state.Dota.hero);
  return {
    hero: state.Dota.hero
  }
}

export default connect(mapState, mapAction)(HomeReactRedux)
