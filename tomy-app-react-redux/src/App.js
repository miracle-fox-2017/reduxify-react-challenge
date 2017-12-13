import {BrowserRouter as Router,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import React,{Component} from 'react';

import {setRockets} from './redux/actions/rocket';
import store from './redux';

// Components
import Rocket from './Rocket';
import Detail from './Detail';

const style={
  container:{
    marginTop:'50px',
    marginBottom:'50px'
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      rockets:[]
    }
  }
  componentWillMount(){
    fetch('https://api.spacexdata.com/v2/rockets')
      .then(response => response.json())
      .then(jsonData => {
        this.props.setRockets(jsonData);
      })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      rockets:nextProps.rockets
    });
  }
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" render={props => <Home rockets={this.state.rockets}/>}/>
          <Route path="/:id" render={props => <Detail {...props} rockets={this.state.rockets}/>}/>
        </div>
      </Router>
    )
  }
}

class Home extends Component {
  render(){
    return(
      <div className="container" style={style.container}>
        {this.props.rockets.map((rocket,i) => {
          return <Rocket rocket={rocket} key={i}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    rockets:state.rocketReducer.rockets
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setRockets : (payload) => dispatch(setRockets(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
