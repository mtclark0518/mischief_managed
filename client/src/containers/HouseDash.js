import React, { Component } from 'react';
import House from './House'


// const locations = this.props.locations.map( location => {
//   const locationRoster = this.props.students.filter(student => student.LocationId === location.id)
//   return(
//     <Location key={'loc' + location.id} id={location.id} name={location.name} type={location.type} students={locationRoster} house={location.House} subject={location.Subject}/>
//   )
// })

class HouseDash extends Component {
  render() {
    const houses = this.props.houses.map( house => {
      const colors = {
        primary: house.primaryColor,
        secondary: house.secondaryColor
      }
      const houseRoster = this.props.students.filter(student => student.HouseId === house.id)
      return(
        <House key={'hs' + house.id} id={house.id} name={house.name} students={houseRoster} colors={colors} score={house.points} founder={house.founder} mascot={house.mascot}/>
      )
    })
    return(
      <div>{ houses }</div>
    )
  }
}
export default HouseDash;

