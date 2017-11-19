import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'

class App extends Component {
  constructor(props){
    super(props)
    this.socket = io('http://localhost:1979')    
    this.state = { 
      number: null,
      name: null
     }
  }

  componentDidMount(){
    this.socket.on('welcome', (data) => {
      console.log(data)
      this.setState({
        name: data.name,
        number: data.number

      })
    })
    this.socket.on('iterated', (data) => {
      this.setState({
          number: data
      })
    })
    this.socket.on('decremented', (data) => {
      this.setState({
          number: data
      })
    })

  }
  

  iterate = (inc) => {this.socket.emit('iterate')}
  decrement = (dec) => {this.socket.emit('decrement')}
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
        <h1>name: {this.state.name}</h1>
            <button
              onClick={inc => this.iterate()}>
                +
            </button>
            <button
              onClick={dec => this.decrement()}>
                -
            </button>
          <h3>{this.state.number} </h3>
        </header>
      </div>
    );
  }
}

export default App;
