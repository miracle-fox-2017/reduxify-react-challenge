import Axios from 'axios'
import firebase from 'firebase'
  
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
  Axios.post('https://api.themoviedb.org/3/search/movie?api_key=19e89bad298de6dc0f532b07d991632e&language=en-US&query=hero&page=1&include_adult=false')
  .then(({data}) => {
    console.log('HASIL CARI', data.results)
  })
  .catch(err => {
    console.log(err)
  })
  return {
    type: 'TO_TWEET'
  }
}