import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'

export const gameData = (value) => {
  return {
    type: 'GAME_LOADER',
    payload: value
  }
}

export const getAllGame = () => {
  return dispatch => {
    axios.get('https://www.giantbomb.com/api/games/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&filter=expected_release_year:2017&limit=20')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let gameList = jsonObj.response.results.game
      dispatch(gameData(gameList))
    })
  }
}