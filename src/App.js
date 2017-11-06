import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './Header'

class App extends Component {
  constructor() {
    super()

    this.state = {
      password: '',
      imageurl: '',
      happyButton: {},
      sadButton: {},
      doNotPush: {}

    }

    this.happyButton = this.happyButton.bind(this);
    this.sadButton = this.sadButton.bind(this);
    this.doNotPush = this.doNotPush.bind(this);
    this.updatedPassword = this.updatedPassword.bind(this);

  }

  happyButton(array) {
    axios.get('/api/sadGif')
      .then(res => {
        this.setState({
          imageurl: res.data[Math.floor(Math.random() * res.data.length)].url
        })
        console.log(this.state);
      })
  }

  sadButton(array) {
    axios.get('/api/happyGif')
      .then(res => {
        this.setState({
          imageurl: res.data[Math.floor(Math.random() * res.data.length)].url
        })
        console.log(this.state)
      })
  }

  doNotPush() {
    axios.get('https://api.giphy.com/v1/gifs/3ohzdQ1IynzclJldUQ?api_key=euvUR5gAUl4sqKKakv3eAxXxERoNWh8n')
      .then(res => {
        console.log(res.data);
        this.setState({
          imageurl: res.data.data.images.original.url
        })
      })
  }

  updatedPassword(e) {
    this.setState({
      password: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div className="viewWindow">
          <div className="viewBox">
            <img src={this.state.imageurl} alt="" />
          </div>
        </div>
        <div className="buttonLayout">
          <button onClick={this.happyButton} className="happy-button">HAPPY</button>
          <button onClick={this.sadButton} className="sad-button">SAD</button>
        </div>
        <br />
        <div className="main-form">
          <div className="label-form">
            <label className="password-text">Password to a Magical World: </label>
            <input onChange={this.updatedPassword} type="text" placeholder="Magic Word" />
          </div>
          <div className="button-form">
            <button onClick={this.doNotPush} className="doNotPush-button">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
