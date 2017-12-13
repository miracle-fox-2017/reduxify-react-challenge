import { createStore } from 'redux'
import articles from '../reducer'  

const store = createStore(articles)

export default store