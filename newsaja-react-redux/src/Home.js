import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Newslist from './Newslist'
import store from './store'
import {getArticles} from './actions'


const newsApi = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5981474fde55432a9656bea68c9267bd'

class Home extends Component {
  componentWillMount() {
    axios.get(newsApi)
         .then(({data}) => {
          this.props.getArticles(data.articles)
         })
         .catch((err) => {
           console.log(err)
         })
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

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: (value) => dispatch(getArticles(value))
  }
}

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)
export default connectedHome
