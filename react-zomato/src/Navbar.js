import React, { Component } from 'react';
import store from './redux/store'
import { getRestaurants } from './redux/actions'
import {
  Link
} from 'react-router-dom'
import { Navbar, Nav, FormControl, FormGroup, Button} from 'react-bootstrap';

class NavbarZomato extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({location: event.target.value});
  }
  handleSubmit(event) {
    this.getData(this.state.location)
    this.setState({location: ''});
    event.preventDefault();
  }
  getData(location){
    getRestaurants(location, cb => {
      store.dispatch(cb)
    })
  }
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Zona Makan</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" name="location" placeholder="Your Location" value={this.state.location} onChange={(e) => this.handleChange(e)} />
          </FormGroup>
          {' '}
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Navbar.Form>
        </Nav>
      </Navbar>
    )
  }
}

export default NavbarZomato;
