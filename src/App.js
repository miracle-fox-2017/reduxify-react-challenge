import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import HeroDetail from './components/HeroDetail.js'
import HeroList from './components/HeroList'
import { Provider } from 'react-redux'
import store from './store'



class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <Router>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <Route exact path="/" component={Home} />
              <Route exact path="/herofull/:moveSpeed" render={(props) => <HeroList {...props} /> } />
              <Route path="/hero/:heroName" render={(props) => <HeroDetail {...props} /> } />
            </div>
          </Router>
        </Provider>  
    );
  }
}

export default App;
