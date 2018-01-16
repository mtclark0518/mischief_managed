import React, { Component } from 'react';
import House from './House'
import Scoreboard from './Scoreboard'
import HouseFocus from '../components/HouseFocus';
import FooterNav from '../components/FooterNav';

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
  resetDash = () => {this.setState( {focus: null} )}

  render() {
    const houses = this.props.houses.map( house => {
      const colors = {
        primary: house.primaryColor,
        secondary: house.secondaryColor
      }
      const headOfHouse = this.props.staff.filter(staff => staff.HouseId === house.id)
      const houseRoster = this.props.students.filter(student => student.HouseId === house.id)
      return(
        <House key={'hs' + house.id} id={house.id} castleView={this.props.castleView} name={house.name} headOfHouse={headOfHouse[0]} students={houseRoster} colors={colors} score={house.points} founder={house.founder} mascot={house.mascot} focus={this.focus} infocus={this.state.focus}/>
      )
    })
    return(
      <div className="Dash">
        {!this.state.focus && (
          <Scoreboard focus={this.focus} houses={houses} />
        )}
        <div className="dashItem"> {houses} </div>
        <HouseFocus focus={this.focus} content={houses}/>
        {this.props.castleView === 'house' &&(
          <FooterNav 
            home={e=>this.props.changeView('home')}
            house={this.resetDash}
            location={e => this.props.changeView('location')}
            />
        )}
      </div>
    )
  }
}
export default HouseDash;

