import React , { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import store from '../store'

class CategoriesPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
  }
  
  render() {
   

    return (
      <div className="catContent">
        <h3>All Categories</h3>

        <ul style={{ listStyle: 'none'}}>
          {
            this.state.categories.map((category, index) => {
              return (
                <li key={index}><a href={category.link}>{category.name}</a></li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      categories: nextProps.categories
    })
  }

  componentWillMount() {
    const apiUrl = 'https://wptavern.com/wp-json/wp/v2/categories'
    axios.get(apiUrl, { crossdomain: true })
      .then(({data}) => {
        store.dispatch({
          type: 'GET_CATEGORIES',
          payload: {
            categories: data
          }
        })

      }).catch(err => console.log({ message: 'Something wrong on categories', error: err.message }));
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories
  }
}

const connectCategories = connect(mapStateToProps, null)(CategoriesPage)
export default connectCategories