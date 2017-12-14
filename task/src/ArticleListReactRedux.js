import React from 'react'
import { connect } from 'react-redux'
import { AddArticlesReactRedux, getArticles } from './actions/actionsArticlesReactRedux' 
import store from './store/'

class ArticlesListReact extends React.Component {
  render () {
    console.log('masuk list', this.props)
    return (
      <div className="container-fluid">
      <div className="row">
        {this.props.articles.map( (article, index) => {
          return (
            <div className="col-sm-6 col-md-5">
              <div className="card">
                <img src={article.urlToImage} alt="..." className="img-thumbnail" />
                <div className="card-body">
                  <h3 className="card-title">{article.title}</h3>
                </div>
              </div> 
            </div>
          )
        })}
      </div>
    </div>
    )
  }

  componentWillMount() {
    this.props.article()
  }
}

const mapStateToProps = (state) => {
  console.log(' a colorful message', state.reducerArticleReact.lastArticles);
  return {
    articles: state.reducerArticleReact.lastArticles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    article: () => dispatch(getArticles()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListReact)