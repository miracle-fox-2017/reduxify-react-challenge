import { createStore } from 'redux'
import collectionsApp from '../reducers'

export default function configureStore(initialState) {
  return createStore(collectionsApp, initialState)
}
