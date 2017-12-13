import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'
import axios from 'axios'

class TagsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: []
    }
  }

  render() {
    return (
      <div className='tagWrapper'>
        <h2>All Tags</h2>

        {
          this.state.tags.map((tag, index) => {
            return (
              <p key={index}><a href={tag.link}>{tag.name}</a></p>
            )
          })
        }
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tags : nextProps.tags
    })
  }

  componentWillMount() {
    const apiUrl = 'https://wptavern.com/wp-json/wp/v2/tags'
    axios.get(apiUrl).then(({data}) => {
      store.dispatch({
        type: 'GET_TAGS',
        payload: {
          tags: data
        }
      })
   }).catch(err => console.error({ message: 'Something wrong', error: err.message }));
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tagReducer.tags
  }
}

const connectTags = connect(mapStateToProps, null)(TagsPage)
export default connectTags
