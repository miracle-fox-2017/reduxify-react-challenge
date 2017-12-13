import { combineReducers }  from 'redux'
import collectionList from './collectionsReducer'
import listItem from './listItemReducer'

const collectionsApp =  combineReducers({
  collectionList,
  listItem
})

export default collectionsApp
