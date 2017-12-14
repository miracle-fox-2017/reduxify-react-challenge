import Axios from 'axios'
import firebase from 'firebase'
const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: '6MI0luGJbAKa5NwO8OKWfrcuo',
  consumer_secret: 'VobjjQjOTQNG7C0yZs2RLukU1HFtZpApvBBlK8YF98kBNUg3FL',
  access_token_key: '930648463850606592-H2zJA6jhl5dTdlqWjU3M9xggwMa5NYC',
  access_token_secret: 'V2Z7yJgaurhuQ0GuUpUukrhYaYVI3RdeIE714TCfafZYd'
});

export const fecthPhotos = (allphotos) => {
  return {
    type: 'ALL_PHOTOS_FIREBASE',
    photos: allphotos
  }
}

export const fecthPhotosFirebase = () => {
  return dispatch => {
    let getFirebase = firebase.database().ref('muka')
    getFirebase.on('value', function(snapshot) {
      let getPhotos = []
      snapshot.forEach(function(anakSnapshot) {
        let anakSnap = anakSnapshot.val()
        getPhotos.push(anakSnap)
      })
      dispatch(fecthPhotos(getPhotos))
    })
  } 
}

export const tweetFromPhotos = (dataToTweet) => {
  console.log('DATA YG AKAN DI TWEET', dataToTweet)
  client.post('statuses/update', {status: dataToTweet})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    console.log(error)
  })
  return {
    type: 'TO_TWEET'
  }
}