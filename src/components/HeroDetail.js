import React, { Component } from 'react'	
import { Link } from 'react-router-dom'

class HeroList extends Component {
	constructor(props) {
      super();
      this.state = {
      hero: props.location.state.hero
      }
	}		

	render() {
		return (
			<div>
				<h4> <span> Name </span> <small> {this.state.hero.Name}</small>
					 <span> MS </span> <small> {this.state.hero.Movespeed} </small>
					 <span> HP </span> <small> {this.state.hero.HP} </small>
					 <span> MANA </span> <small> {this.state.hero.Mana} </small>
				</h4>
				<button> <Link to='/'> Back </Link> </button>	 				
			</div>
		)
	}
}

export default HeroList