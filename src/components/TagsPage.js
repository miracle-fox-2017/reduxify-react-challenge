import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'
import axios from 'axios'
import { addTags, fetchTagsAPI, fetchTagsData } from '../actions/tagActions'

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

  componentDidMount() {
    const apiUrl = 'https://wptavern.com/wp-json/wp/v2/tags'
    this.props.fetchTags(apiUrl)
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tagReducer.tags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTags: (url) => dispatch(fetchTagsData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsPage)
