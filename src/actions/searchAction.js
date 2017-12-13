export const action_search = (value) => {
  return {
    type: 'SEARCH_KEYWORD',
    payload: value
  }
}

export const action_search_get = (value) => {
  return {
    type: 'SEARCH_GET',
    payload: value
  }
}