import React, { Component } from 'react';
import Location from './Location'


class LocationDash extends Component {
  render() {
    const locations = this.props.locations.map( location => {
      return(
        <Location key={'Location' + location.id} name={location.name} type={location.type} house={location.House} subject={location.Subject} students={location.Students}/>
      )
    })
    return(
      <div>{ locations }</div>
    )
  }
}
export default LocationDash;

