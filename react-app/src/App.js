import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bulma/css/bulma.css';

import store from './Store'
import actions from './actions/getphoto'

import TheNavBar from './components/TheNavBar'
import HomeLayout from './components/HomeLayout'
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
              <div>
                <Route exact path="/" render={ (props) => <HomeLayout><Home {...props} /></HomeLayout> } />
                <Route exact path="/user" component={User} />
                <Route exact path="/increment" component={Increment} />
                <Route exact path="/flick/:farmid/:serverid/:id/:secret" render={ (props) => <HomeLayout><ImageShow {...props} /></HomeLayout> } />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
