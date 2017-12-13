import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'
import Navbar from './Navbar'
import TheArticle from './TheArticle' 
import ArticleId from './ArticleId' 
import SearchArticle from './SearchArticle'
import store from './store'
import { Provider } from 'react-redux'
import TheArticleReact from './TheArticleReact' 

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="container-fluid">
          <div>
            <Navbar/>
          </div>
          <div>
            <Route exact path="/" component={TheArticle} />
            <Route exact path="/articlesReact" component={TheArticleReact} />
            <Route  path="/article/:url" render={(props) => <ArticleId {...props}/> } />
            <Route exact path="/search/:keyword" component={SearchArticle}/>
          </div>
        </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
