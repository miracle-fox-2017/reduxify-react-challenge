import {createStore} from 'redux'
import heroStarWars from '../reducers'

const store = createStore(heroStarWars)

export default store