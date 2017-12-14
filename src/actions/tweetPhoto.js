import Axios from 'axios'
import firebase from 'firebase'

export const fecthPhotos = (allphotos) => {
  console.log(allphotos, 'IUNI ACTION')
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
      console.log(getPhotos, 'OTW')
      dispatch(fecthPhotos(getPhotos))
    })
  } 
}