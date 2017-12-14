import React from 'react'
import axios from 'axios'

const style = {
  maxHeight: '80vh'
}

class ImageShow extends React.Component {
  constructor(props){
    super()
    this.state = {
      description: '',
      owner: '',
      title: '',
      urls: ''
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps(){
    // this.props.match.params.id
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=ff6f56a15e5597b81579f5b38613cbad&photo_id=${this.props.match.params.id}&format=json&nojsoncallback=1`)
    .then(({ data }) => {
      this.setState({
        description: data.photo,
        owner: data.photo.owner.username,
        title: data.photo.title._content,
        urls: data.photo.urls.url[0]._content
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    // this.props.match.params.id
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=ff6f56a15e5597b81579f5b38613cbad&photo_id=${this.props.match.params.id}&format=json&nojsoncallback=1`)
    .then(({ data }) => {
      this.setState({
        description: data.photo,
        owner: data.photo.owner.username,
        title: data.photo.title._content,
        urls: data.photo.urls.url[0]._content
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  shouldComponentUpdate(){
    return true
  }

  render() {
    return (
      <div className="column is-pulled-left is-8">
        {this.props.match.params.id === '26280153979' ? alert('gotcha!') : ''}
        <a href={this.state.urls} target="blank"><img style={style} src={ `https://farm${this.props.match.params.farmid}.staticflickr.com/${this.props.match.params.serverid}/${this.props.match.params.id}_${this.props.match.params.secret}_b.jpg` } alt=''/></a>
        <h1 className="title is-3">{this.state.title}</h1>
        <h1 className="title is-4">From: {this.state.owner}</h1>
      </div>
    )
  }
}



export default ImageShow;
