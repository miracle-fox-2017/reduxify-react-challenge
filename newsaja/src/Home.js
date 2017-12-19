import React, { Component } from 'react';

//import komponen-komponennya

class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Welcome to News AJA</h1>
        <p className="lead">Ini adalah web yang berisi highligth berita-berita politik dan teknologi berbahasa inggris langsung dari BBC dan Techrunch</p>
        <hr className="my-4" />
        <p>Berita ini didapat melalui news API</p>
      </div>
    );
  }
}

export default Home
