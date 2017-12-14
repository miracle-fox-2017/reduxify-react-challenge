import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addUser, fetchUser } from '../actions/getuser'

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
      <div className="column is-12">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.users.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <a className="button is-primary">Edit</a>
                    <a className="button is-danger">Delete</a>
                  </td>
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
