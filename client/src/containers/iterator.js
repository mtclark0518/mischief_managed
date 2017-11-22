import React, { Component } from 'react'
import io from 'socket.io-client'
class Iterator extends Component {
    constructor(props){
      super(props)
      this.socket = io()
      this.state = { 
        name: null,
        number: null,        
        users: null,
        username: null
      }
    }
  componentDidMount(){
    this.socket.on('welcome', data => {
      this.setState( { name: data.name, number: data.number, username: this.props.username } )
      this.socket.emit('new user', {user: this.state.username})
      
    })
    this.socket.on('update users', data => {
      this.setState( { users: data.users } );
    })
    this.socket.on('incremented', data => {
      this.setState( { number: data } );
    })
    this.socket.on('decremented', data => {
      this.setState( { number: data } ); 
    })
  }

  increment = (ie) => {
    console.log(ie.target.value)
    this.socket.emit('increment')
  
  }
  decrement = (de) => {
    console.log(de)
    this.socket.emit('decrement')
  
  }

    render(){
        return(
            <div>
              <div>{this.state.name}</div>
              <div>logged in as {this.state.username}</div>
              <div>users connected: {this.state.users}</div>
                <button
                    value={1}
                    onClick={ie=>this.increment(ie)}>
                        +
                </button>
                <button
                    value={-1}
                    onClick={de=>this.decrement(de)}>
                        -
                </button>
                <h3>{this.state.number}</h3>
            </div>
        )
    }
}


export default Iterator

    //     this.socket.emit('user joined', 
    // {
    //   username: this.state.username 
    // })  