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
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.users.map((item, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
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
