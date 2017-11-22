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


    this.socket.on('welcome', (data) => {
      this.setState({name: data.name, number: data.number})
    })
    this.socket.on('update users', (data) => {
      this.setState({users: data.users})
    })
    this.socket.on('incremented', (data) => {
      this.setState({ number: data })
    })
    this.socket.on('decremented', (data) => {
      this.setState({ number: data })
    })

  }

  increment = (inc) => {this.socket.emit('increment')}
  decrement = (dec) => {this.socket.emit('decrement')}

    render(){
        return(
            <div>
              <div>{this.state.name}</div>
              <div>users: {this.state.users}</div>

                <button
                    value={1}
                    onClick={inc => this.increment()}>
                        +
                </button>
                <button
                    value={-1}
                    onClick={dec => this.decrement()}>
                        -
                </button>
                <h3>{this.state.number}</h3>
            </div>
        )
    }
}


export default Iterator