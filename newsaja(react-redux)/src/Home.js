import React, { Component } from 'react'
import axios from 'axios'
import Newslist from './Newslist'
import store from './store'
import {getArticles} from './actions'
const newsApi = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5981474fde55432a9656bea68c9267bd'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      articles: []
    }

    store.subscribe(()=> {
      this.setState({
        articles: store.getState()
      })
    })
  }

  componentDidMount() {
    axios.get(newsApi)
         .then(({data}) => {
           store.dispatch(getArticles(data.articles))
         })
         .catch((err) => {
           console.log(err)
         })
  }

  render() {
		return(
			<div>
		     	{ this.state.articles.map(((article,index) => {
			        return (
			          <Newslist article={article} key={index}/>
			        )
		    	  }))
		     	}
		    </div>
		)
	}
}

export default Home;
