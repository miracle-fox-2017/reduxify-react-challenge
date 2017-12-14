import React, { Component } from 'react'
// import store from '../store'
import Hero from './Hero'	
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchApiHeroes } from '../actions/getHeroes'

class Home extends Component {
	constructor() {	
      super();
      this.state = {
      	heroes: []
      }

	  // store.subscribe(() => {
	  // 	if(!store.getState().subscribed){
	  //     this.setState({
	  //       heroes: store.getState().heroReducer.heroes,
	  //       subscribed: true
	  //     })
	  // }
	  // })      
	}	

	componentDidMount() {     	
	    this.props.fetchApiHeroes()
	}	

	render() {
		return(
			<div>
			<ul style={{overflow:"none"}}>
				<li style={{textDecoration:"none", float:"left"}} > <Link to='/heromovespeed/less'> Show Hero MS less then 300 with ReactRedux </Link> </li>
				<li style={{textDecoration:"none", float:"right"}} > <Link to='/heromovespeed/more'> Show Hero MS more then 300 with ReactRedux </Link> </li>
			</ul>
			<br/>
		     	{ this.props.heroes.map(((hero,i) => {
			        return (
			          <Hero heroList={hero} key={i}/>
			        )
		    	  }))
		     	}		
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
	return {
		fetchApiHeroes: () => dispatch(fetchApiHeroes())
	}
}

export default connect (mapStateToProps,mapDispatchToProps)(Home)