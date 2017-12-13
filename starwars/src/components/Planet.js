import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

import {allPlanets} from '../actions'
import '../App.css'

const swapi = axios.create({
  baseURL: 'https://swapi.co/api/'
})

class OneHero extends Component {

  componentWillMount() {
    swapi.get('/planets')
      .then(({ data }) => {
        this.props.planets(data.results)
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="card col-md-12">
        <h3 className="card-header">DAFTAR PLANET</h3>
        <div className="card-body">
          <ol>
          {this.props.allplanets.map((planet, id) => {
            return <li key={id}>{planet.name}</li>
          })}
          </ol>
        </div>
        <div className="card-footer text-muted">
          Name of Planet
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('===========STATE TO PROPS=================');
  console.log(state);
  console.log('====================================');
  return {
    allplanets: state.heroReducer.planets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    planets: (params) => dispatch(allPlanets(params))
  }
}

const connectedOneHero = connect(mapStateToProps, mapDispatchToProps)(OneHero)

export default connectedOneHero
