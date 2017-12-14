import axios from 'axios'

export const addUser = (users) => {
  return {
    type: 'ADD_USER',
    payload: {
      users
    }
  }
}

export const fetchUser = () => {
  return (dispatch, addUser) => {
    axios.get('http://jsonplaceholder.typicode.com/users')
    .then(({ data }) => {
      dispatch({
        type: 'ADD_USER',
        payload: data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const delUser = (id) => {
  return {
    type: 'DELETE_USER',
    payload: {
      id
    }
  }
}
