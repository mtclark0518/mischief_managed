import React, { Component } from 'react';
import Iterator from './containers/iterator'

import Login from './containers/login'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isUser: false,
      username: null
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
  SetUserName = data => {
    this.setState({username: data})
    console.log(data)
  }

  render() {
    return (
      <div className="App">
          { this.state.isUser !== true && (
            <Login 
              onSetUserName={this.SetUserName}
              onToggleUser={this.toggleUser} />
          )}
          { this.state.isUser === true && (
            <Iterator 
              username={this.state.username} />
          )}
      </div>
    );
  }
}

export default App;
