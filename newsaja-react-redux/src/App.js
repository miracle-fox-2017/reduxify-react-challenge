import {getArticles} from './actions'
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Home'
import NewsDetail from './NewsDetail'
import { Provider } from 'react-redux'
import store from './store'
import axios from 'axios'
const newsApi = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5981474fde55432a9656bea68c9267bd'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/:url" render={(props) =>
            <NewsDetail {...props} />
          }/>
        </div>
      </Router>
      </Provider>
    )
  }
}

export default App;
