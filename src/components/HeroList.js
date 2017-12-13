import React, { Component } from 'react'
import axios from 'axios'
import store from '../store'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { getMoveSpeedMore } from '../actions/getHeroes'
import { getMoveSpeedLess } from '../actions/getHeroes'
const heroApi = `http://api.herostats.io/heroes/all`

class HeroFullDetail extends Component{	
	render() {
		return (
			<div>
			    <button> <Link to='/'> Back </Link> </button>
				{this.props.heroes.map((hero,i) => {	
					return(
						<h4 key={i}> <span> Name </span> <small> {hero.Name}</small>
							 <span> MS </span> <small> {hero.Movespeed} </small>
							 <span> HP </span> <small> {hero.HP} </small>
							 <span> MANA </span> <small> {hero.Mana} </small>
						</h4>
					)
				})} 										
			</div>			
		)
	}
	componentWillMount() {
 		axios.get(heroApi)
	    .then(response => {
	      let tempHero = []
	      for (let hero in response.data){
	        tempHero.push(response.data[hero])
	      }
			const speed = this.props.match.params.moveSpeed
			if(speed == "more"){
				store.dispatch(getMoveSpeedMore(tempHero))
			}
			if(speed == "less"){
				store.dispatch(getMoveSpeedLess(tempHero))
			}	      
	    })
	    .catch(err => {
	      console.log(err)
	    })								
	}	
}


function mapStateToProps(state) {
	return {
		heroes: state.heroReducer.heroes
	}	
}

export default connect(mapStateToProps)(HeroFullDetail)