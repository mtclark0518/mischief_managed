import React, { Component } from 'react';
import House from './House'
import Scoreboard from './Scoreboard'
import FourFocus from '../components/FourFocus';

class HouseDash extends Component {
  constructor(props){
    super(props)
    this.state={
      focus: null
    }
  }
  focus = place => {
    const giveFocus = this.props.houses.filter(house => house.id == place)
    this.setState( {focus:giveFocus[0]} )
  }
  resetDash = () => {
    this.setState( {focus: null} )
  }
  render() {
    const houses = this.props.houses.map( house => {
      const colors = {
        primary: house.primaryColor,
        secondary: house.secondaryColor
      }
      const headOfHouse = this.props.staff.filter(staff => staff.HouseId === house.id)
      const houseRoster = this.props.students.filter(student => student.HouseId === house.id)
      return(
        <House key={'hs' + house.id} id={house.id} name={house.name} headOfHouse={headOfHouse[0]} students={houseRoster} colors={colors} score={house.points} founder={house.founder} mascot={house.mascot} focus={this.focus} infocus={this.state.focus}/>
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
          <Scoreboard houses={houses} />
        )}
        <div> {houses} </div>
        <FourFocus focus={this.focus} content={houses}/>
      </div>
    )
  }
}
export default HouseDash;

