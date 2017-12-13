import axios from 'axios'

const initialState = {
  tags: []
}

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TAGS':
      const newTags = state.tags.concat(action.payload.tags)
      return { ...state, tags: newTags };

    default:
      return state;
  }
}

export default tagReducer