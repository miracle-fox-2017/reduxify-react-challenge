import axios from 'axios'
export const GET_RESTAURANT = 'GET_RESTAURANT'
export const GET_DETAIL_RESTAURANT = 'GET_DETAIL_RESTAURANT'

export function getRestaurants (location) {
  return (dispatch) => {
    axios.get(`http://developers.zomato.com/api/v2.1/locations?query=${location}`,{
      headers : {
        'user-key' : '6f7e7987e70dc105330926821cabef62'
      }
    })
    .then(response => {
      if(response.data.location_suggestions[0] === undefined) {
        alert('Kagak ada tempat makan tong')
      } else {
        let enId = response.data.location_suggestions[0].entity_id
        let enTy = response.data.location_suggestions[0].entity_type
        axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${enId}&entity_type=${enTy}`,{
          headers : {
            'user-key' : '6f7e7987e70dc105330926821cabef62'
          }
        })
        .then((responseDetail) => {
          let detailLocation = responseDetail.data
          dispatch({
            type: GET_RESTAURANT,
            payload: detailLocation.best_rated_restaurant
          })
        })
        .catch(error => {
          console.error(error)
        })
      }})
      .catch(error => {
        console.error(error)
      })
  }
}

export function getDetailRestaurant (resID) {
  return dispatch => {
    axios.get(`http://developers.zomato.com/api/v2.1/restaurant?res_id=${resID}`,{
      headers : {
        'user-key' : '6f7e7987e70dc105330926821cabef62'
      }
    })
    .then(({data}) => {
      dispatch({
        type: GET_DETAIL_RESTAURANT,
        payload: data
      })
    })
    .catch(err => console.error(err))
  }
}
