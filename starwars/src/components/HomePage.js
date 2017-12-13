import React, { Component } from 'react';
import axios from 'axios'

import store from '../store'
import {allHeroes} from '../actions'

import logo from '../starwarslogo.png';
import CardPerson from './CardPerson';

const swapi = axios.create({
  baseURL: 'https://swapi.co/api/'
})

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: []
    }
    store.subscribe(() => {
      console.log('=============TANDA DARI HOMEPAGE=================');
      console.log(store.getState())
      console.log('====================================');
      this.setState({
        people: store.getState().heroReducer
      })
    })
  }

  componentWillMount() {
    swapi.get('/people')
      .then(({ data }) => {
        store.dispatch(allHeroes(data.results))
      })
      .catch(err => console.error(err))
    swapi.get('/planets')
    .then(({ data }) => {
      this.setState({
        planets: data.results
      }, () => {
        console.log('Daftar planet sekarang ', this.state.planets)
      })
    })
    .catch(err => console.error(err))
  }

  render () {
      return (
        <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="row">
          {this.state.people.map((data, index) => {
              return <CardPerson key={index} person={data} index={index} planets={this.state.planets}> </ CardPerson>
          })
        }
        </div>
        </div>
      )
  }
}


export default HomePage