import React, { Component } from 'react';
import axios from 'axios'
import Iterator from './iterator'

import Login from './login'
import '../App.css';


class Container extends Component {
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
  SetUserName = (name, password) => {
    let data = {
      name: name,
      password: password
    }
    
    console.log(data)
    axios({
      method: 'POST',
      url: 'api/login',
      data: data
    })
    .then(response => {
      console.log(response.data)
      let res = response.data;
      if(typeof(res) === 'string'){
        console.log('got an error')
      } else {
      this.setState({username: response.data.name})
      this.toggleUser();
      }
    });
  };

  render() {
    return (
      <div className="App">
          { this.state.isUser !== true && (
            <Login 
              onSetUserName={this.SetUserName}
              />
          )}
          { this.state.isUser === true && (
            <Iterator 
              username={this.state.username} />
          )}
      </div>
    );
  }
}

export default Container;
