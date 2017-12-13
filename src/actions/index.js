import firebase from 'firebase';

const Photos = (dataPhotos) => {
  let data = dataPhotos
  return {
    type: 'ALL_PHOTOS',
    dataPhotos:data
  }
}

const savePhoto = (newData) => {
  let db = firebase.database().ref('muka')
  let inputPhoto = newData.result
  let newObj = {
    jenis_kelamin : inputPhoto.gender.value,
    umur : inputPhoto.age_est.value,
    senang : inputPhoto.happiness.value,
    perasaan : inputPhoto.mood.value,
    tersenyum : inputPhoto.smiling.value,
    mata : inputPhoto.eyes.value,
    marah : inputPhoto.anger.value,
    ketakutan : inputPhoto.fear.value,
    kesedihan : inputPhoto.sadness.value,
    perasaan_baik : inputPhoto.neutral_mood.value,
    bibir : inputPhoto.lips.value,
    kaca_mata : inputPhoto.glasses.value,
    url: newData.url
  }
  db.push(newObj)
  return {
    type: 'SAVE_PHOTO',
    newPhoto: newObj
  }
}
export {
  Photos,
  savePhoto
}