import Axios from 'axios'

export function getAllListItem (newListItem) {
  return {
    type: 'GET_LIST_ITEM',
    listItem: newListItem
  }
}

export function listItemRequest (newListItem, collectionId) {
  return dispatch => {
    dispatch(getAllListItem(newListItem))
    return (
      Axios.get('https://developers.zomato.com/api/v2.1/search', {
        params: {
          'lat': '-6.259926',
          'lon': '106.781565',
          'collection_id': collectionId
        },
        headers: {
          'user-key': '428923ad3bad98317ed12b98036fdc83'
        }
      }).then(({data: {restaurants}}) => {
        dispatch(getAllListItem(restaurants))
      })
    )
  }
}
