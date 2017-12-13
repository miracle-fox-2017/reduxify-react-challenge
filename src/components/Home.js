import React, { Component } from 'react'
import store from '../store'
import Hero from './Hero'	
import axios from 'axios'
import { getHeroes } from '../actions/getHeroes'
import { Link } from 'react-router-dom'
const heroApi = `http://api.herostats.io/heroes/all`

class Home extends Component {
	constructor() {	
      super();
      this.state = {
      	heroes: []
      }

	  store.subscribe(() => {
	  	if(!store.getState().subscribed){
	      this.setState({
	        heroes: store.getState().heroReducer.heroes,
	        subscribed: true
	      })
	  }
	  })      
	}	

	componentWillMount() {
	    axios.get(heroApi)
	    .then(response => {
	      let tempHero = []
	      for (let hero in response.data){
	        tempHero.push(response.data[hero])
	      }
	      store.dispatch(getHeroes(tempHero))
	    })
	    .catch(err => {
	      console.log(err)
	    })
	}	

	render() {
		return(
			<div>
			<ul style={{overflow:"none"}}>
				<li style={{textDecoration:"none", float:"left"}} > <Link to='/heromovespeed/less'> Show Hero MS less then 300 with ReactRedux </Link> </li>
				<li style={{textDecoration:"none", float:"right"}} > <Link to='/heromovespeed/more'> Show Hero MS more then 300 with ReactRedux </Link> </li>
			</ul>
			<br/>
		     	{ this.state.heroes.map(((hero,i) => {
			        return (
			          <Hero heroList={hero} key={i}/>
			        )
		    	  }))
		     	}		
		    </div> 			
		)	
	}
}

export default Home