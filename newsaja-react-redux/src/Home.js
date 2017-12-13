import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Newslist from './Newslist'
import store from './store'
import {getArticles} from './actions'
import {fetchArticles} from './actions'


const newsApi = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5981474fde55432a9656bea68c9267bd'

class Home extends Component {
  componentWillMount() {
    this.props.fetchArticles()
  }

  render() {
		return(
      <div>
		     	{ this.props.articles.map(((article,index) => {
			        return (
			          <Newslist article={article} key={index}/>
			        )
		    	  }))
		     	}
		    </div>
		)
	}
}

const mapStateToProps = (state) => {
  console.log("mapstate", state)
  return {
    articles: state.articles
  }
}


const connectedHome = connect(mapStateToProps, {fetchArticles})(Home)
export default connectedHome
