import React, { Component } from 'react'
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import { gameDetail } from '../actions/gameDetailAction'

class GameDetail extends Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }


  componentWillMount() {
    this.setState({
      loading: true
    })
    let id = this.props.match.params.id
    axios.get('https://www.giantbomb.com/api/game/'+id+'/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let gameData = jsonObj.response.results
      this.props.gameDetail(gameData)
      this.setState({
        loading: false
      })
    })
  }

  render() {
    let content = ''
    if(this.state.loading) {
      content = <div><h1 className="title">Loading...</h1></div>
    } else {
      content = <div className="column is-12 article">
                  <p className="title">{this.props.gameData.name}</p>
                  {ReactHtmlParser(this.props.gameData.description || this.props.gameData.deck)}
                </div>
    }
    return(
      <div>
        {content}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameData: state.gameDetail.gameDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gameDetail: (v) => dispatch(gameDetail(v))
  }
}

const GameDetailConnect = connect(mapStateToProps, mapDispatchToProps)(GameDetail)
export default GameDetailConnect