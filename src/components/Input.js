import React, { Component } from 'react';
import { Layout, Form, Input, Button, Card } from 'antd';
import { Redirect } from 'react-router-dom';
import Axios from 'axios'
import store from '../store'
import {savePhoto} from '../actions'

const FormItem = Form.Item;
const { Content } = Layout;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

class Inputs extends Component {
  constructor(){
    super()
    this.state = {
      uploaded: false,
      newData: {
        foto: '',
        avatarURL: ''
      }
    };
  }
  onChanges = (e) => {
    let state = this.state.newData
    state[e.target.name]= e.target.value
    this.setState(state)
  }
  Processing = (e) => {
    e.preventDefault()
    Axios.post(`http://api.skybiometry.com/fc/faces/detect.json?api_key=6obnuu0u9u04bvimnne28ni345&api_secret=5c9bq4igc78d0islt74i7fi2qa&urls=${this.state.avatarURL}&attributes=all`)
    .then(({data}) => {
      let result = data.photos[0].tags[0].attributes
      store.dispatch(savePhoto({
        result:result,
        url: this.state.newData.avatarURL
      }))
      this.setState({
        uploaded: true,
        newData: {
          avatarURL: ''
        }
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        { this.state.uploaded && <Redirect to='/' />}
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <br/>
            <label>Foto:</label>
            <FormItem {...formItemLayout}>
              <Input name="avatarURL" value={this.state.newData.avatarURL} placeholder="Link url  images" onChange={this.onChanges} />
            </FormItem>
            {this.state.newData.avatarURL &&
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="your  gambar" src={this.state.newData.avatarURL} />}
              >
            </Card>
            }
            <Button type="primary" onClick={this.Processing}>Process</Button>
          </div>
        </Content>
      </div>
    );
  }
}

export default Inputs

