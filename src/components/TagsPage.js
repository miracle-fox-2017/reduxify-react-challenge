import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchTagsData } from '../actions/tagActions'

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
          (this.props.isLoading) ? <h1>Loading...</h1> : ''
        }

        {
          (this.props.hasErrored) ? <h1>Error Loading Tags...</h1> : ''
        }

        {
          this.props.tags.map((tag, index) => {
            return (
              <p key={index}><a href={tag.link}>{tag.name}</a></p>
            )
          })
        }
      </div>
    )
  }

 /*  componentWillReceiveProps(nextProps) {
    this.setState({
      tags : nextProps.tags
    })
  } */

  componentDidMount() {
    const apiUrl = 'https://wptavern.com/wp-json/wp/v2/tags'
    this.props.fetchTags(apiUrl)
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tagReducer.tags,
    hasErrored: state.tagReducerError,
    isLoading: state.tagReducerLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTags: (url) => dispatch(fetchTagsData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsPage)
