import React, { Component } from 'react';
import Location from './Location'


class LocationDash extends Component {


  
  render() {
    const locations = this.props.locations.map( location => {
      const locationRoster = this.props.students.filter(student => student.LocationId === location.id)
      return(
        <Location key={'loc' + location.id} id={location.id} name={location.name} type={location.type} students={locationRoster} house={location.House} subject={location.Subject} sendUpdate={this.props.sendUpdate}/>
      )
    })
    return(
      <div>{ locations }</div>
    )
  }
}
export default LocationDash;

