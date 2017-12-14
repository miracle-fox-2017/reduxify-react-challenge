import React, { Component } from 'react';
import firebase from 'firebase';
import { Layout, Card } from 'antd';
import store from '../store'
import { getPhotos } from '../actions'
import { fecthPhotos, fecthPhotosFirebase } from '../actions/tweetPhoto'
import {connect} from 'react-redux'

const { Content } = Layout;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
let  gambarStyle = {
  width: "auto",
  height: "200px"
};

class PostTweet extends Component {
  constructor(){
    super()
  }
  componentWillMount () {
    this.props.fetchFirebase()
  }
  render() {
    return (
      <div>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <h1>Choose Photo to Tweet</h1>
            <div>
              <Card key={Math.random()}  title=''>
              {this.props.allPhotos}
                {/* {this.state.allPhotos.map(photos => {
                  return(  
                    <Card.Grid key={Math.random()} style={gridStyle}>
                      <img alt="" style={gambarStyle} src={photos.url} />
                      <p>Jenis Kelamin: {photos.jenis_kelamin}</p>
                      <p>Kaca Mata: {photos.kaca_mata}</p>
                      <p>Kesedihan: {photos.kesedihan}</p>
                      <p>Ketakutan: {photos.ketakutan}</p>
                      <p>Marah: {photos.marah}</p>
                      <p>Mata: {photos.mata}</p>
                      <p>Perasaan: {photos.perasaan}</p>
                      <p>Perasaan Baik: {photos.perasaan_baik}</p>
                      <p>Senang: {photos.senang}</p>
                      <p>Tersenyum: {photos.tersenyum}</p>
                      <p>Umur: {photos.umur}</p>
                      <p>Bibir: {photos.bibir}</p>
                    </Card.Grid>
                  )
                })} */}
              </Card>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'INJIN')
  return {
    // allPhotos: state.allphotos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (photos) => dispatch(fecthPhotos(photos)),
    fetchFirebase: () => dispatch(fecthPhotosFirebase())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTweet)

