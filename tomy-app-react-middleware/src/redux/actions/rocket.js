import axios from 'axios';

export const setRockets = (payload) => {
  return{
    type:'SET_ARTICLE',payload
  }
}

export const fetchApi = () => {
  return (dispatch,getState) => {
    axios.get('https://api.spacexdata.com/v2/rockets').then(({data}) => {
      dispatch(setRockets(data));
    }).catch(err => {
      console.log(err);
    });
  }
}
