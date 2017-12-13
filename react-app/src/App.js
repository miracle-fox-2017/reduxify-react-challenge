import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bulma/css/bulma.css';

import store from './Store'
import actions from './actions/getphoto'
import TheNavBar from './TheNavBar'
import TheSideBar from './TheSideBar'
import Home from './Home'
import ImageShow from './Flick';
import Increment from './Increment'
import './App.css';

class App extends Component {
  constructor(props){
    super()

    this.state = {
      flick: []
    }

    this.getData = this.getData.bind(this);
  }

  getData() {
    actions(cb => {
      store.dispatch(cb)
    })
  }

  componentWillMount(){
    this.getData()
  }

  render() {
    return (
      <Router>
        <div>
        <Route path="/" component={TheNavBar} />
          <div className="container head-fix">
            <div className="columns">
              <Route path="/" component={TheSideBar} />
              <Route exact path="/" component={Home} />
              <Route exact path="/increment" component={Increment} />
              <Route path="/flick/:farmid/:serverid/:id/:secret" component={ImageShow} message="hehehe"/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
