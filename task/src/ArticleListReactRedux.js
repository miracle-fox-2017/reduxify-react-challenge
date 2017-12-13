import React from 'react'
import { connect } from 'react-redux'

class ArticlesListReact extends React.Component {
  render () {
    return (
      <div className="container-fluid">
      <div className="row">
      
    { props.articles.map((article, index) => {
        return (
          <div className="col-sm-6 col-md-5">
          </div>
        )
      })
    }
      </div>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log(state)
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListReact)