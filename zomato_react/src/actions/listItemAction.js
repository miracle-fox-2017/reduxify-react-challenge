export function getAllListItem (newListItem) {
  return {
    type: 'GET_LIST_ITEM',
    listItem: newListItem
  }
}
