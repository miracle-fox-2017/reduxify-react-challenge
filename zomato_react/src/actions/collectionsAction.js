import Axios from 'axios'

export function getAllCollections (newCollections) {
  return {
    type: 'GET_COLLECTIONS',
    collections: newCollections
  }
}

export function collectionsRequest (newCollections) {
  return dispatch => {
    dispatch(getAllCollections(newCollections))
    return (
      Axios.get(`https://developers.zomato.com/api/v2.1/collections`, {
        params: {
          'lat': '-6.259926',
          'lon': '106.781565'
        },
        headers: {
          'user-key': '428923ad3bad98317ed12b98036fdc83'
        }
      }).then(({data: {collections}}) => {
          dispatch(getAllCollections(collections))
      })
    )
  }
}
