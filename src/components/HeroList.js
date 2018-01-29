import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { getMoveSpeedMore } from '../actions/getHeroes'
import { getMoveSpeedLess } from '../actions/getHeroes'
import { fetchApiHeroes } from '../actions/getHeroes'

class HeroFullDetail extends Component{	
	render() {
		return (
			<div>
			    <button> <Link to='/'> Back </Link> </button>
				{this.props.heroes.map((hero,i) => {	
					return(
						<h4 key={i} > <span> Name </span> <small> {hero.Name}</small>
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
			const speed = this.props.match.params.moveSpeed
			if(speed === "more"){
				this.props.getMoveSpeedMore(this.props.heroes)
			}
			if(speed === "less"){
				this.props.getMoveSpeedLess(this.props.heroes)
			}	      	    						
	}
	
	componentWillUnmount() {
		    this.props.fetchApiHeroes()
	}
}

function mapStateToProps(state) {	     	
	return {
		heroes: state.heroReducer.heroes
	}	
}

function mapDispatchToProps (dispatch) {   	
	return {
		getMoveSpeedMore: (e) => dispatch(getMoveSpeedMore(e)),
		getMoveSpeedLess: (e) => dispatch(getMoveSpeedLess(e)),
		fetchApiHeroes: () => dispatch(fetchApiHeroes())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroFullDetail)