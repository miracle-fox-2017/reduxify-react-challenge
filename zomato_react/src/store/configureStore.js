import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import collectionsApp from '../reducers'

const loggerMiddleware = createLogger()

const middleware = applyMiddleware(loggerMiddleware, thunkMiddleware)

export default function configureStore(initialState) {
  return createStore(
    collectionsApp,
    initialState,
    compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}
