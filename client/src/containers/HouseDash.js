import React, { Component } from 'react';
import House from './House'
import Scoreboard from './Scoreboard'

// const locations = this.props.locations.map( location => {
//   const locationRoster = this.props.students.filter(student => student.LocationId === location.id)
//   return(
//     <Location key={'loc' + location.id} id={location.id} name={location.name} type={location.type} students={locationRoster} house={location.House} subject={location.Subject}/>
//   )
// })

class HouseDash extends Component {
  constructor(props){
    super(props)
    this.state={
      focus: null
    }
  }
  focus = place => {
    let myPlace = this.props.houses.filter(house => house.id === place)
    console.log(myPlace[0])
    this.setState({focus:myPlace[0]})

  }
  resetDash = () => {
    this.setState({focus: null})
  }

  render() {
    const houses = this.props.houses.map( house => {
      const colors = {
        primary: house.primaryColor,
        secondary: house.secondaryColor
      }
      const houseRoster = this.props.students.filter(student => student.HouseId === house.id)
      return(
        <House key={'hs' + house.id} id={house.id} name={house.name} students={houseRoster} colors={colors} score={house.points} founder={house.founder} mascot={house.mascot} focus={this.focus} infocus={this.state.focus}/>
      )
    })
    
    return(
      <div>
        {this.props.castleView === 'house' &&(
          <div>
            <button value="home" onClick={e => this.props.changeView(e)}></button>
            <button onClick={this.resetDash}>houses</button>
            <button value='location' onClick={e => this.props.changeView(e)}>location</button>             
          </div>
        )}
        {!this.state.focus && (
          <Scoreboard houses={houses} focus={this.focus}/>

        )}
        <div>{ houses }</div>

      </div>
    )
  }
}
export default HouseDash;

