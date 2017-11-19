import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'

class App extends Component {
  constructor(props){
    super(props)
    this.socket = io('http://localhost:1984')    
    this.state = {
      users: 0
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

  }
  

  iterate = () => {this.socket.emit('iterate')}
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <button
              onClick={() => this.iterate()}>Welcome to React</button>
          </h1>
        </header>
        <div>
          {this.state.users}
        </div>
      </div>
    );
  }
}

export default App;
