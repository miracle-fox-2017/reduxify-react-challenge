import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store/store'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

//import komponen-komponennya
import Home from './Home'
import Techcrunch from './Techcrunch'
import BBC from './BBC'
import BBCDetail from './BBCDetail'
import Cari from './Cari'
import Navmenu from './Navmenu'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Navmenu />
          {/* Kumpulan Route */}
          <Route exact path="/" render={() => <Home />}/>
          <Route exact path="/bbc" render={() => <BBC />}/>
          <Route path="/bbc/:url" render={(props) => <BBCDetail {...props} />}/>
          <Route exact path="/techcrunchnews" render={() => <Techcrunch />}/>
          <Route path="/techcrunchnews/:url" render={(props) => <BBCDetail {...props} />}/>
          <Route exact path="/cari" render={() => <Cari />} />
          <Route path="/cari/:url" render={(props) => <BBCDetail {...props} />}/>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
