import React,{Component} from 'react';
import {render} from 'react-dom';
import Rocket from './Rocket';

const style={
  container:{
    marginTop:'50px',
    marginBottom:'50px'
  }
}

class Index extends Component {
  constructor(){
    super();
    this.state={
      rockets:[]
    }
  }
  componentWillMount(){
    fetch('https://api.spacexdata.com/v2/rockets')
      .then(response => response.json())
      .then(jsonData => this.setState({
        rockets:jsonData
      }));
  }
  render(){
    return(
      <div className="container" style={style.container}>
        {this.state.rockets.map((rocket,i) => {
          return <Rocket rocket={rocket} key={i}/>
        })}
      </div>
    )
  }
}

render(<Index/>,document.getElementById('root'));
