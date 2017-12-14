import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import Home from './Home'
import HeadlineNews from './HeadlineNews'
import NewsDetail from './NewsDetail'
import SearchingResult from './SearchingResult'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/:url" render={(props) => <NewsDetail {...props} />} />
            <Route path="/news/headline" component={HeadlineNews} />
            <Route path="/news/searching" component={SearchingResult} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
