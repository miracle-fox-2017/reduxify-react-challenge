import React,{Component} from 'react';

const style={
  title:{
    fontSize:'25px',
    display:'block',
    textAlign:'center'
  },
  label:{
    fontSize:'18px',
    display:'block',
    fontWeight:'bold',
    textAlign:'center'
  },
  content:{
    fontSize:'18px',
    display:'block',
    textAlign:'center'
  }
}

export default class Rocket extends Component {
  constructor(props){
    super(props);
    this.state={
      rocket:this.props.rocket
    }
  }
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <span style={style.title}>{this.state.rocket.name}</span>
        </div>
        <div className="panel-body">
          <span style={style.label}>Description</span>
          <span style={style.content}>$ {this.state.rocket.description}</span>
          <span style={style.label}>Cost Per Launch</span>
          <span style={style.content}>$ {this.state.rocket.cost_per_launch}</span>
        </div>
      </div>
    )
  }
}
