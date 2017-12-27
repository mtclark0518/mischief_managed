import React, { Component } from 'react';
import Panel from '../components/Panel'
import Location from '../components/Location'
import StudentContainer from './StudentContainer'
import StaffContainer from './StaffContainer'
import Label from '../components/Label'

import '../styles/index.css'


class LocationDash extends Component {
  constructor(props){
    super(props)
    this.state = {
        classrooms: false,
        houseRooms: false,
        commonAreas: false,
        restrictedAreas: false,
        expanded: false,
        focused: null
    }
    this.expand = this.expand.bind(this)
  }
    componentDidMount(){
  }

  render() {
    const classroomArray = 
    this.props.locations.map( classroom => {
      
      if(classroom.type === 'Classroom'){
        let name = classroom.Subject.name
        return (
        <Location
          key={classroom.id}
          location={classroom}
          name={name}
          expand={this.expand}
          focus={this.focus}
        />
      )}
    })
    let houseRoomArray = 
    this.props.locations.map( commonroom=>{
      if(commonroom.type === 'Restricted' && commonroom.name === 'Common Room'){
        let name = commonroom.House.name + ' ' + commonroom.name
        return (
        <Location
          key={commonroom.id}
          location={commonroom}
          name={name}
          expand={this.expand}
          focus={this.focus}
        />
      )}
    })
    const commonPlacesArray = 
    this.props.locations.map( place=>{
      if(place.type === 'Common Area'){
        return (
        <Location
          key={place.id}
          location={place}
          expand={this.expand}
          focus={this.focus}
        />
      )}
    })
    const restrictedAreasArray = 
    this.props.locations.map( place=>{
      if(place.type === 'Restricted'){
          if(place.name !== 'Common Room'){
        return (
        <Location
          key={place.id}
          location={place}
          expand={this.expand}
          focus={this.focus}
        />
      )}}
    })
return(

    <div className="flexColumn">
    
        { this.state.focused !== null && (

          <div className="focusedLocation">
  {/*  formats the heading  */}
            { this.state.focused.type !== 'Classroom' && this.state.focused.name !== 'Common Room' &&(
              <Label title={this.state.focused.name} onClick={this.clear}/>
            )}
            { this.state.focused.type === 'Classroom' && this.state.focused.Subject.name !== 'Care of Magical Creatures' && (
              <Label title={this.state.focused.Subject.name + ' ' + this.state.focused.name} onClick={this.clear}/>
            )}
            { this.state.focused.type === 'Classroom' && this.state.focused.Subject.name === 'Care of Magical Creatures' && (
              <Label title={this.state.focused.name} onClick={this.clear}/>
            )}
            { this.state.focused.name === 'Common Room' && (
              <Label title={this.state.focused.House.name + ' ' + this.state.focused.name} onClick={this.clear}/>
            )}

  {/* consistent across all locations   */}
              <StaffContainer from={this.state.focused.id}/>
              <StudentContainer from={this.state.focused.id} moveStudent={this.props.moveStudent} syncScoreboard={this.props.syncScoreboard} focused={this.state.focused} type={'location'} locations={this.props.locations} hex={this.props.hex} honor={this.props.honor} clear={this.clearAll}/>
          </div>
        )}


        { this.state.focused === null && 
          !this.state.classrooms && 
          !this.state.houseRooms && 
          !this.state.commonAreas && 
          !this.state.restrictedAreas && (
            <div className="locationCategories">
              <Panel data={'Classrooms'} onClick={this.searchClasses}/>
              <Panel data={'Common Rooms'} onClick={this.searchHouseRooms}/>
              <Panel data={'Public Spaces'} onClick={this.searchCommonAreas}/>
              <Panel data={'Restricted Areas'} onClick={this.searchRestricedAreas}/>
            </div>
        )}
        {!this.state.expanded && (
          <div className="locationArrayContainer">
            { this.state.classrooms && (
              <div>
                  <Label title={"Classrooms:"}onClick={this.clearSearch}/>              
                  {classroomArray}
              </div>
            )}
            { this.state.houseRooms && (
                <div>
                  <Label title={"Common Rooms:"}onClick={this.clearSearch}/>              
                  {houseRoomArray}
                </div>
            )}
            { this.state.commonAreas && (
                <div>
                  <Label title={"Public Spaces:"}onClick={this.clearSearch}/>              
                  {commonPlacesArray}
                </div>
            )}
            { this.state.restrictedAreas && (
                <div>
                  <Label title={"Restricted Areas:"}onClick={this.clearSearch}/>              
                  {restrictedAreasArray}
                </div>
            )}
          </div>
        )}
    </div>
    );
  }
  searchClasses = () => {
    this.setState(prevState => ({
      classrooms: !prevState.classrooms
    }))
  }
  searchHouseRooms = () => {
    this.setState(prevState => ({
      houseRooms: !prevState.houseRooms
    }))
  }
  searchCommonAreas = () => {
    this.setState(prevState => ({
      commonAreas: !prevState.commonAreas
    }))
  }
  searchRestricedAreas = () => {
    this.setState(prevState => ({
      restrictedAreas: !prevState.restrictedAreas
    }))
  }
  clearSearch = () => {
    this.setState({
      classrooms: false,
      houseRooms: false,
      commonAreas: false,
      restrictedAreas: false,
    })
  }
  
  expand = place => {
    this.setState({
      expanded: true,
      focused: place
    })

  }

  clear = () => {
    this.setState({
      expanded: false,
      focused: null
    })
  }
  clearAll = () => {
    this.setState({
      expanded: false,
      focused: null
    })
    this.clearSearch()
  }
}

export default LocationDash;

