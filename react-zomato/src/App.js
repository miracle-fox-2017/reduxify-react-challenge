import React, { Component } from 'react';
import { createStore } from 'redux'
import { restaurantApp } from './redux/reducers'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';
import Navbar from './Navbar'
import Timeline from './Timeline'
import DetailItem from './DetailItem'

class App extends Component {

  constructor() {
    super();
    this.state = {
      zomato: ['']
    };
    this.store = createStore(restaurantApp)
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <Navbar/>
              <div className="container">
                <Route exact path="/" render={(props) => (<Timeline test={this.state.zomato}  {...props}/>)}/>
                <Route path="/detail/:id" component={DetailItem}/>
              </div>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
