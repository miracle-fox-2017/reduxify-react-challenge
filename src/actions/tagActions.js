import axios from 'axios'

export const fetchTagsError = (boolean) => {
  return {
    type: 'FETCH_TAGS_ERROR',
    hasErrored: boolean
  }
}

export const fetchTagsLoading = (boolean) => {
  return {
    type: 'FETCH_TAGS_LOADING',
    isLoading: boolean
  }
}

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
    dispatch(fetchTagsLoading(true))

    axios.get(url).then(({ data }) => {
      dispatch(fetchTagsLoading(false))
      dispatch(fetchTagsSuccess(data))

    }).catch(err => {
      dispatch(fetchTagsError(true))
      console.error({ message: 'Something wrong', error: err.message })
    });
  }
} 