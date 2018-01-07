import React, { Component } from 'react';
import House from './House'


class HouseDash extends Component {
  render() {
    const houses = this.props.houses.map( house => {
      const colors = {
        primary: house.primaryColor,
        secondary: house.secondaryColor
      }
      return(
        <House key={'House' + house.id} name={house.name} students={house.Students} colors={colors} score={house.points} founder={house.founder} mascot={house.mascot}/>
      )
    })
    return(
      <div>{ houses }</div>
    )
  }
}
export default HouseDash;

