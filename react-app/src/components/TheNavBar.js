import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';

const TheNavBar = (props) => (
  <div className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
          <img src={logo} className="Top-logo" alt="logo" />
          React App !!!
      </Link>

      <button className="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/increment">Counter</Link>
          <Link className="navbar-item" to="/user">User List</Link>
        </div>

      </div>
    </div>

  </div>
)

export default TheNavBar
