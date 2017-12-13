import { createStore } from 'redux'
import reducers from './reducer'

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers,reduxDev)

export default store