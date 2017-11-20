import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client'

class App extends Component {

    constructor(props){
      super(props)

      this.socket = 
        io('http://localhost:1979')
      
    }
      componentDidMount(){
        this.socket.on('welcome', (data)=>{
          console.log(data)
        })
      }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
