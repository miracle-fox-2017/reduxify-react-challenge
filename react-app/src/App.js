import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bulma/css/bulma.css';

import store from './Store'
import actions from './actions/getphoto'

import TheNavBar from './components/TheNavBar'
import TheSideBar from './components/TheSideBar'
import TheRightSideBar from './components/TheRightSideBar'
import Home from './components/Home'
import ImageShow from './components/Flick';
import Increment from './components/Increment'
import User from './components/User'
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
    actions.getphotos(cb => {
      store.dispatch(cb)
    })
    actions.getRightPhotos(cb => {
      store.dispatch(cb)
    })
  }

  componentWillMount(){
    this.getData()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
          <Route path="/" component={TheNavBar} />
            <div className="container head-fix">
              <div className="columns">
                <Route path="/" component={TheSideBar} />
                <Route exact path="/" component={Home} />
                <Route exact path="/user" component={User} />
                <Route exact path="/increment" component={Increment} />
                <Route path="/flick/:farmid/:serverid/:id/:secret" component={ImageShow} />
                <Route path="/" component={TheRightSideBar} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
