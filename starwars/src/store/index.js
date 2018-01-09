import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import heroStarWars from '../reducers'

const store = createStore(heroStarWars, applyMiddleware(thunk))

export default store