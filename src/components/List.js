import React, { Component } from 'react';
import { Layout, Card, Input, Form, Button } from 'antd';
import { fecthPhotos, fecthPhotosFirebase, tweetFromPhotos } from '../actions/tweetPhoto'
import {connect} from 'react-redux'

const FormItem = Form.Item;
const formItemLayout = {
  width: 'auto'
};
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
                {this.props.allPhotos.map(photos => {
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
                      <Button type="primary" onClick={ () => this.props.tweetPhoto(this.state.email)}>Post to Twitter</Button>
                    </Card.Grid>
                  )
                })}
              </Card>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allPhotos: state.postTweet.allphotos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    tweetPhoto: (search) => dispatch(tweetFromPhotos(search)),
    fetchPhotos: () => dispatch(fecthPhotos()),
    fetchFirebase: () => dispatch(fecthPhotosFirebase())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTweet)

