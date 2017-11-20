import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client'
const deploymentType = process.env.NODE_ENV
console.log(deploymentType)

class App extends Component {

    constructor(props){
      super(props)

      this.socket = io()
      this.state = { 
        number: null,
        name: null,
        users: null
      }
    }
  componentDidMount(){
    this.socket.on('update users', (data)=>{
      console.log(data)
      this.setState({users: data.users})
    })

    this.socket.on('welcome', (data) => {
      console.log(data)
      this.setState({
        name: data.name,
        number: data.number
      })
    })

    this.socket.on('iterated', (data) => {
      this.setState({ number: data })
    })

    this.socket.on('decremented', (data) => {
      this.setState({ number: data })
    })
  }

  iterate = (inc) => {this.socket.emit('iterate')}
  decrement = (dec) => {this.socket.emit('decrement')}
  
  render() {
    return (
      <div className="App">
        <div>users: {this.state.users}</div>
        <h1>{this.state.name}</h1>
            <button
              onClick={inc => this.iterate()}>
                +
            </button>
            <button
              onClick={dec => this.decrement()}>
                -
            </button>
          <h3>{this.state.number}</h3>
      </div>
    );
  }
}

export default App;
