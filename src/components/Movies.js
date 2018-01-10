import React, { Component } from 'react'
import { Layout, Input, Card, Form, Button } from 'antd';
import { findMovies } from '../actions/findMovies'
import {connect} from 'react-redux'


const FormItem = Form.Item;
const formItemLayout = {
  width: 'auto'
};
const { Content } = Layout;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
let  gambarStyle = {
  width: "auto",
  height: "200px"
};

class Movies extends Component {
  constructor () {
    super()
    this.state = {
      movie: ''
    }
  }
  onChanges (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <br/>
            <label>Keyword:</label>
            <FormItem {...formItemLayout}>
              <Input name="movie" value={this.state.movie} placeholder="Input your movies" onChange={ (e) => this.onChanges(e)}/>
            </FormItem>
            <Button type="primary" onClick={ () => this.props.findMovies(this.state.movie)}>Process</Button>
          </div>
          <Card key={Math.random()}  title=''>
            {this.props.allMovies.map(movie => {
              return(
                <Card.Grid key={Math.random()} style={gridStyle}>
                  <h2>{movie.original_title}</h2>
                  <p>Release: {movie.release_date}</p>
                  <p>Rate: {movie.vote_average}</p>
                  <img alt="" style={gambarStyle} src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} />
                  <p>Overview: {movie.overview.substring(0, 100)}</p>
                </Card.Grid>
              )
            })}
          </Card>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allMovies: state.findMovies.hasilMovies
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    findMovies: (search) => dispatch(findMovies(search)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
