import {Provider} from 'react-redux';
import React,{Component} from 'react';
import {render} from 'react-dom';

import store from './redux';

// Components
import App from './App';

class Index extends Component {
  render(){
    return(
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

render(<Index/>,document.getElementById('root'));
