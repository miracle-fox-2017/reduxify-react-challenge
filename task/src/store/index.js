import { createStore, applyMiddleware } from 'redux'
import articles from '../reducer'
import logger from 'redux-logger' 

const mylogger = (store) => (next) => (action) => {
    console.log('LOgged Action', action)
    next(action)
}
const store = createStore(articles, 
    applyMiddleware(logger)
)

export default store