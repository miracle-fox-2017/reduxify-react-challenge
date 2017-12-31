import axios from 'axios';

const getphoto = {
  type: 'GETFLICK',
  payload: []
}

const getRightPhoto = {
  type: 'RIGHTFLICK',
  payload: []
}

const getphotos = (cb) => {
  axios.get('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=ff6f56a15e5597b81579f5b38613cbad&user_id=spacex&per_page=20&format=json&nojsoncallback=1')
  .then(({ data })=>{
    const newActions = {...getphoto, payload: data.photos.photo }
    cb(newActions)
  })
  .catch(err=>{
    console.log(err)
  })
}

const getRightPhotos = (cb) => {
  axios.get('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=ff6f56a15e5597b81579f5b38613cbad&user_id=spacex&per_page=20&page=2&format=json&nojsoncallback=1')
  .then(({ data })=>{
    const newActions = {...getRightPhoto, payload: data.photos.photo }
    cb(newActions)
  })
  .catch(err=>{
    console.log(err)
  })
}

const photo = {
  getphotos,
  getRightPhotos
}

export default photo;
