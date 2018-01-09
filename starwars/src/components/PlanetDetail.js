import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

class PlanetDetail extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="card col-md-12">
        <h3 className="card-header">{this.props.location.state.planet.name}</h3>
        <div className="card-body">
          <h5 className="card-title">Population</h5>
          <h6 className="card-subtitle">{this.props.location.state.planet.population} people</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Rotation Period: {this.props.location.state.planet.rotation_period} hours</li>
          <li className="list-group-item">Orbital Period: {this.props.location.state.planet.orbital_period} days</li>
          <li className="list-group-item">Climate: {this.props.location.state.planet.climate}</li>
          <li className="list-group-item">Gravity: {this.props.location.state.planet.gravity}</li>
          <li className="list-group-item">Terrain: {this.props.location.state.planet.terrain}</li>
          <li className="list-group-item">Diameter {this.props.location.state.planet.diameter} m</li>
        </ul>
        <div className="card-footer text-muted">
          <Link to="/planets">Back Home</Link>
        </div>
      </div>
    )
  }
}

export default PlanetDetail