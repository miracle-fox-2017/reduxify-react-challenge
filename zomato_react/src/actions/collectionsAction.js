import Axios from 'axios'

export function getAllCollections (newCollections) {
  return {
    type: 'GET_COLLECTIONS',
    collections: newCollections
  }
}

export function collectionsRequest (newCollections, lat, lon) {
  console.log('masuk di actions', lat, lon);
  return dispatch => {
    dispatch(getAllCollections(newCollections))
    return (
      Axios.get(`https://developers.zomato.com/api/v2.1/collections`, {
        params: {
          'lat': lat,
          'lon': lon
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
