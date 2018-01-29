import {Link} from 'react-router-dom'
import React, { Component } from 'react'
// import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'	
import { deleteHero } from '../actions/getHeroes'

class Hero extends Component {
	render() {
		return (
			<div>
				<h4> <span> Name </span> <small> {this.props.heroList.Name}</small>
				</h4>
				{/*<button> <Link to={this.props.heroList.Name}> Show Detail </Link> </button>	 */}
				<button> <Link to={ {
					pathname: `/hero/${this.props.heroList.Name}`,
					state: {
						hero: {
							Name : this.props.heroList.Name,
							Movespeed : this.props.heroList.Movespeed,
							HP : this.props.heroList.HP,
							Mana : this.props.heroList.Mana
						}
					}
				}}> Show Hp and Mana Redux</Link> </button>	 
				<button onClick={() => this.props.deleteHero(this.props.heroList, this.props.heroes)}> Delete </button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		heroes: state.heroReducer.heroes
	}
}

function mapDispatchToProps(dispatch) {
	return{
		// bindActionCreators({deleteHero: (herolist, heroes) => deleteHero(herolist, heroes)}, dispatch)
		deleteHero: (e,all) => dispatch(deleteHero(e,all))
	} 			
}
export default connect (mapStateToProps, mapDispatchToProps)(Hero)