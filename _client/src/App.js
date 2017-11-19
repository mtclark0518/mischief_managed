import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'

class App extends Component {
  constructor(props){
    super(props)
    this.socket = io('http://localhost:1984')    
    this.state = {
      users: null
    }

  }

  componentDidMount(){
    this.socket.on('welcome', (data) => {
      this.setState({
        users: data
      })
    })
    this.socket.on('iterated', (data) => {
      this.setState({
          users: data
      })
    })
    this.socket.on('decremented', (data) => {
      this.setState({
          users: data
      })
    })

  }
  

  iterate = (inc) => {this.socket.emit('iterate')}
  decrement = (dec) => {this.socket.emit('decrement')}
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
            <button
              onClick={inc => this.iterate()}>
                +
            </button>
            <button
              onClick={dec => this.decrement()}>
                -
            </button>
          <h3>{this.state.users} </h3>
        </header>
      </div>
    );
  }
}

export default App;
