import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Dota from './component/Dota'
import Home from './component/Home'
import HomeReactRedux from './component/Home-ReactRedux'
import News from './component/News'


class Navbar extends React.Component {
  constructor () {
    super ()

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Router</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li className="active"><Link to="/HomeReactRedux">HomeReactRedux</Link></li>
                <li className="active"><Link to="/News">News</Link></li>

              </ul>
            </div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/HomeReactRedux" component={HomeReactRedux}/>
            <Route exact path="/details/:heroName" render={(props) => (<Dota heroes={this.props.hero} {...props}/> )}/>
            <Route exact path="/HomeReactRedux/:heroName" render={(props) => (<Dota heroes={this.props.hero} {...props}/> )}/>
            <Route exact path="/News" component={News}/>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
