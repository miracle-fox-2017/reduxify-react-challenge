import firebase from 'firebase';

const getPhotos = (firebase, cd) => {
  let getData = firebase.database().ref('muka')
  let that  = this
  getData.on('value', function(snapshot) {
    let tampung = []
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      tampung.push(childData)
    });
    console.log(tampung)
      return cb(tampung)    
  })
}
export {
  getPhotos
}