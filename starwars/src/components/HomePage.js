import React, { Component } from 'react';
import axios from 'axios'

import store from '../store'
import {allHeroes} from '../actions'

import CardPerson from './CardPerson';

const swapi = axios.create({
  baseURL: 'https://swapi.co/api/'
})

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
    store.subscribe(() => {
      console.log('=============TANDA DARI HOMEPAGE=================');
      console.log(store.getState())
      console.log('====================================');
      this.setState({
        people: store.getState().heroReducer.people
      })
    })
  }

  componentWillMount() {
    swapi.get('/people')
      .then(({ data }) => {
        store.dispatch(allHeroes(data.results))
      })
      .catch(err => console.error(err))
  }

  render () {
      return (
        <div className="row">
          {this.state.people.map((data, index) => {
              return <CardPerson key={index} person={data} index={index}> </ CardPerson>
          })
        }
        </div>
      )
  }
}


export default HomePage