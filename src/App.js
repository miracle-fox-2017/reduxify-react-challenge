import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Inputs from './components/Input'
import PostTweet from './components/PostTweet'
import './App.css';
import firebase from 'firebase';
import { Layout, Menu } from 'antd';
import store from './store'
import {Provider} from 'react-redux'

const { Header, Content } = Layout;

class App extends Component {
  constructor(){
    super()
    let config = {
      apiKey: "AIzaSyAqYZm-2FtcQCv4SMKiEKZhTD5_ueZX0io",
      authDomain: "ecommerce-186802.firebaseapp.com",
      databaseURL: "https://ecommerce-186802.firebaseio.com",
      projectId: "ecommerce-186802"
    };
    firebase.initializeApp(config);

    this.state = {
      allPhotos: [],
      newData: {
        foto: '',
        avatarURL: ''
      }
    };
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Layout className="layout">
            <Header>
              <div className="logo" label="MukaMu"/>
              <Router>
                <div>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                  >
                    <Menu.Item><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item><Link to="/input">Input</Link></Menu.Item>
                    <Menu.Item><Link to="/posttweet">Post To Tweet</Link></Menu.Item>
                  </Menu>
                  <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/input" component={Inputs}/>
                    <Route path="/posttweet" component={PostTweet}/>
                  </div>
              </Router>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              
            </Content>
          </Layout> 
        </div>
      </Provider>
    );
  }
}

export default App;
