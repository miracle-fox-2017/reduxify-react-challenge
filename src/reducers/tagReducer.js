import axios from 'axios'

const initialState = {
  tags: []
}

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TAGS_SUCCESS' :
      const tags = state.tags.concat(action.payload.tags)
      return { ...state, tags: tags };

    default:
      return state;
  }
}

export default tagReducer