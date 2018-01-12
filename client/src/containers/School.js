import React, { Component } from 'react';
import axios from 'axios'
import CastleDash from './CastleDash';
import Schedule from './Schedule'

class School extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: [],
      locations: [],
      houses: [],
      active: false,
      period: null
    }
  }

  componentDidMount(){
    axios( { method: 'GET', url: '/api/students'})
    .then( response => { console.log(response.data); this.setState({students: response.data}) })
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
  setPeriod = period => {
    this.state.period !== period ? this.updateSchedule(period) : console.log('nothin to see here')
  }

  render() {
    return(
      <div>
        <Schedule setPeriod={this.setPeriod}/>
      
        {!this.state.active && (
          <div onClick={this.activate}>click</div>
        )}
        {this.state.active && (
          <div>
            <div onClick={this.deactivate}>close</div>
            <CastleDash 
              students={this.state.students}
              locations={this.state.locations}
              houses={this.state.houses}
              sendUpdate={this.onUpdateRequest}
              />
          </div>
        )}
      </div>
    )
  }
  onUpdateRequest = ( update, amount) => {
    console.log(update, amount)
    axios({
      method: 'PUT',
      url: '/api/students/' + update,
      data: {
        amount: amount
      },
    })
    .then(response =>{
      let update = response.data
      this.setState(
        { students: this.state.students.map( student => {
          if( student.id === update.id ){ 
            return Object.assign( {}, student, {
              points: update.points,
              updatedAt: update.updatedAt
            })
          } else {
            return student
          }
        })}
      )
    }).then(()=>{
      this.syncScoreboard()
    })
  }
  syncScoreboard = () => {
    axios({
      method: 'GET', 
      url: '/api/houses/score'
    }).then(response=>{
      let update = response.data
      this.setState({houses:update})
    })
  }
  updateSchedule = block => {
    this.setState({period: block})    
    axios({
      method: 'POST',
      url: '/api/schedule',
      data: {
        block: block
      }
    }).then(response =>{
      let students = response.data
      console.log(students)
      this.setState(
        {students: students}
      )
    })
  }

}
export default School;
