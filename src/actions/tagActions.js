import axios from 'axios'

export const fetchTagsSuccess = (tags) => {
  return {
    type: 'FETCH_TAGS_SUCCESS',
    payload: {
      tags
    }
  }
}

export const fetchTagsData = (url) => {
  return (dispatch) => {
    axios.get(url).then(({ data }) => {
      dispatch(fetchTagsSuccess(data))

    }).catch(err => console.error({ message: 'Something wrong', error: err.message }));
  }
} 