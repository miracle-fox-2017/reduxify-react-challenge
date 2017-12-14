import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'

export const searchKeyword = (value) => {
  return {
    type: 'SEARCH_KEYWORD',
    payload: value
  }
}

export const searchResult = (value) => {
  return {
    type: 'SEARCH_RESULT',
    payload: value
  }
}

export const searchGet = (keyword) => {
  return dispatch => {
    axios.get('https://www.giantbomb.com/api/search/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&query='+keyword+'&resources=game')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let results = jsonObj.response.results.game
      dispatch(searchResult(results))
    })
  }
}