import Axios from 'axios'
import firebase from 'firebase'
import TinEye from 'tineye-api'
var api = new TinEye('https://api.tineye.com/rest/', '.E2F9UE00zKwer5mxdNS', 'VwKm-bi2ZwgO=hCfP.^WzsiiMS*2NkGS1OzdpR*.');

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
  var url = dataToTweet;
  var params = {
    'offset': 0,
    'limit': 10,
    'sort': 'score',
    'order': 'desc'
  };
  api.searchUrl(url, params)
    .then(function(response) {
      console.log('HASIL PENCARIAN', response);
    })
    .catch(function(error) {
      console.error(error);
    });
  // client.post('statuses/update', {status: dataToTweet})
  // .then(function (tweet) {
    
  //   console.log(tweet);
  // })
  // .catch(function (error) {
  //   console.log(error)
  // })
  return {
    type: 'TO_TWEET'
  }
}