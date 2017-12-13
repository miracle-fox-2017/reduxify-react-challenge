import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import store, { get_heroName } from './store'
import HeroReact from './HeroReact'

class HomeReactRedux extends Component {
  constructor (){
    super ()
    this.state = {
      hero: []
    }
  }

  componentWillMount() {
    axios.get('http://api.herostats.io/heroes/all')
    .then(response => {
      let tampung = []
      for (var index in response.data) {
        tampung.push(response.data[index])
      }
      this.props.get_heroName(tampung)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render () {
    return (
      <Router>
        <div>
          <h1>DOTA HERO WITH REACT-REDUX</h1>
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
      </Router>
    )
  }
}

const mapAction = (dispatch) => {
  return {
    get_heroName : (payload) => dispatch(get_heroName(payload))
  }
}

const mapState = (state) => {
  console.log('INI DI MAP STATE', state.Dota.hero);
  return {
    hero: state.Dota.hero
  }
}

export default connect(mapState, mapAction)(HomeReactRedux)
