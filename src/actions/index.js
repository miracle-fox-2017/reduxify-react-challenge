const Photos = (dataPhotos) => {
  let data = dataPhotos
  console.log('DATA',data)
  return {
    type: 'ALL_PHOTOS',
    dataPhotos:data
  }
}

const getPhotos = () => {
  // let getData = firebase.database().ref('muka')
  // getData.on('value', function(snapshot) {
  //   let tampung = []
  //   snapshot.forEach(function(childSnapshot) {
  //     var childData = childSnapshot.val();
  //     tampung.push(childData)
  //   });
  //   console.log('MAUSK')
  //   Photos(tampung)
  // })
}
export {
  getPhotos,
  Photos
}