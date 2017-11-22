import React, { Component } from 'react';
import io from 'socket.io-client'

class Login extends Component {
  constructor(props){
    super(props)
    this.socket = io();
    this.state = {
      username: null,
    }
  }

componentDidMount(){}

  login = (e) => {
      e.preventDefault();
      this.socket.emit('user joined', {
          username: this.state.username,
      })
      this.props.onToggleUser();
  }

    updateName(nameEvent){
        this.setState({
            username: nameEvent.target.value
        });
    }
  render() {
    return (
      <div>
      <form className="Login" onSubmit={e => this.login(e)}>
        <input 
            type="text"
            placeholder="username"
            onChange={nameEvent => this.updateName(nameEvent)}/>

        <button type="submit">enter</button>
      </form>
      </div>
    );
  }
}

export default Login;
