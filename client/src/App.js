import React, { Component } from 'react';
import Iterator from './containers/iterator'
// import io from 'socket.io-client'

import Login from './containers/login'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    // this.socket = io();
    this.state = {
      isUser: false,
    }
    this.toggleUser = this.toggleUser.bind(this);
  }

  componentDidMount(){

  }

  toggleUser = () => {
      this.setState(prevState => ({
        isUser : !prevState.isUser
      }))
  }

  render() {
    return (
      
      <div className="App">
          {
            this.state.isUser !== true && (
              <Login onToggleUser={this.toggleUser.bind(this)}/>
            )
          }
          {
            this.state.isUser === true && (
              <Iterator />
            )
          }
      </div>
    );
  }
}

export default App;
