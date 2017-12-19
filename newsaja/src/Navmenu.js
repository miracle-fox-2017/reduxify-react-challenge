import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class Navmenu extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link to="/" className="navbar-brand">NewsAJA</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to={{pathname: '/'}} className="nav-link">Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: '/bbc'}} className="nav-link">bbc news</Link>
              </li>
              <li className="nav-item">
                <Link to="/techcrunchnews" className="nav-link">techcrunch news</Link>
              </li>
              <li className="nav-item">
                <Link to="/cari" className="nav-link">Cari</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navmenu;
