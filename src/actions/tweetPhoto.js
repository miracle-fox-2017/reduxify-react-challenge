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