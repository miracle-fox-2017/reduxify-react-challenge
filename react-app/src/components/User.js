import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addUser, fetchUser } from '../actions/getuser'

console.log(addUser)

class User extends Component {
  constructor (props) {
    super()

  }

  getAxiosUser(){
    axios.get('http://jsonplaceholder.typicode.com/users')
    .then(({ data }) => {
      this.props.addUser(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentWillMount() {
    // this.getAxiosUser()
    this.props.fetchUser()
  }

  render () {
    return (
      <div className="column is-pulled-left is-8">
        {JSON.stringify(this.props.users.users)}
        <h1 className="title is-3"></h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.UserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
    fetchUser: () => dispatch(fetchUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(User)
