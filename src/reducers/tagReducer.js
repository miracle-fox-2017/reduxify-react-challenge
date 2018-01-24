import axios from 'axios'

const initialState = {
  tags: []
}

export const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TAGS_SUCCESS' :
      const tags = state.tags.concat(action.payload.tags)
      return { ...state, tags: tags };

    default:
      return state;
  }
}

export const tagReducerError = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_TAGS_ERROR':
      return action.hasErrored
    
     default:
      return state;
  }
}

export const tagReducerLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_TAGS_LOADING':
      return action.isLoading
    
    default:
      return state;
  }
}

// export default tagReducer