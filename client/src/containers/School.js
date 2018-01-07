import React, { Component } from 'react';
import axios from 'axios'
import CastleDash from './CastleDash';


class School extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: [],
      locations: [],
      houses: [],
      active: false
    }
  }

  componentDidMount(){
    axios( { method: 'GET', url: '/api/students'})
    .then( response => { this.setState({students: response.data}) })
    .then( () => { 
      axios( { method: 'GET', url: '/api/locations' })
      .then( response => { this.setState({locations: response.data}) })
      .then( () => {
        axios({ method: 'GET', url: '/api/houses'})
        .then( response => { this.setState({houses: response.data}) })
      })
    })
  }

  activate = () => { this.setState( {active: true} ) }
  deactivate = () => { this.setState( {active: false} ) }

  render() {
    return(
      <div>
        {!this.state.active && (
          <div onClick={this.activate}>click</div>
        )}
        {this.state.active && (
          <div onClick={this.deactivate}>close
            <CastleDash 
              students={this.state.students}
              locations={this.state.locations}
              houses={this.state.houses}
              />
          </div>
        )}
      </div>
    )
  }
}
export default School;
