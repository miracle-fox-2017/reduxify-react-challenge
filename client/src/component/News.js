import React from 'react'
import { connect } from 'react-redux'
import { fetchNewsAPI } from '../action/api'
import NewsDetails from './NewsDetails'

class News extends React.Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

componentWillMount () {
    this.props.fetchNewsAPI()
}

  render () {
    return (
      <div>
      <h1>HEADLINE NEWS</h1>
        {this.props.news.map((d,i) => {
          return (<NewsDetails berita={d} key={i}/>)
        })}
      </div>
    )
  }
}

const mapAction = (dispatch) => {
  return {
    fetchNewsAPI: (payload) => dispatch(fetchNewsAPI(payload))
  }
}

const mapState = (state) => {
  console.log('ini di NEWS COMPONENT', state.News.news);
  return {
    news: state.News.news
  }
}

export default connect(mapState, mapAction)(News)
