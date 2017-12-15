import React, { Component } from 'react';
import axios from 'axios'
import Panel from '../components/Panel'
import Header from '../components/Header'
import Location from '../components/Location'

import '../styles/index.css'


class LocationDash extends Component {
  constructor(props){
    super(props)
    this.state = {
        locations: [],
        classrooms: false,
        houseRooms: false,
        commonAreas: false,
        restrictedAreas: false,
        focused: null
    }
  }
    componentDidMount(){
    this.getData()
  }

  getData(){
    axios({
      method: "GET",
      url: "api/locations"
    })
  .then( locations => {
      this.setState({ 
        locations: locations.data
      })
    });
  }

  render() {
    // let locationArray = string => {
    //   this.state.locations.map( location => {
    //     if(location.type === string){
    //      return (
    //       <Location
    //         key={location.id}
    //         location={location}
    //       />
    //     )         
    //     }
    //   })
    // }
    const classroomArray = 
    this.state.locations.map( classroom=>{
      if(classroom.type === 'Classroom'){
        console.log('fuckin ay am i right')
        return (
        <Location
          key={classroom.id}
          location={classroom}
        />
      )}
    })
    let houseRoomArray = 
    this.state.locations.map( commonroom=>{
      if(commonroom.type === 'Restricted'){
        
        if(commonroom.name === 'Common Room'){
        console.log('common ROOOOM')
          
        return (
        <Location
          key={commonroom.id}
          location={commonroom}
        />
      )}}
    })
    const commonPlacesArray = 
    this.state.locations.map( place=>{
      if(place.type === 'Common Area'){
        console.log('goobiddity goobitty goo')
        return (
        <Location
          key={place.id}
          location={place}
        />
      )}
    })
    const restrictedAreasArray = 
    this.state.locations.map( place=>{
      if(place.type === 'Restricted'){
          if(place.name !== 'Common Room'){
        console.log('a coodle doodle doo')
        return (
        <Location
          key={place.id}
          location={place}
        />
      )}}
    })
return(
    <div className="LocationDash">
    
      <div className="locationDashDisplay">
        { this.state.classrooms !== true && this.state.houseRooms !== true && this.state.commonAreas !== true && this.state.restrictedAreas !== true && (
          <div className="locationPanels">
            <Panel data={'Classrooms'} onClick={this.searchClasses}/>
            <Panel data={'Common Rooms'} onClick={this.searchHouseRooms}/>
            <Panel data={'Public Spaces'} onClick={this.searchCommonAreas}/>
            <Panel data={'Restricted Areas'} onClick={this.searchRestricedAreas}/>
          </div>
        )}
        { this.state.classrooms === true && (
          <div className="locationPanels">
            <div>{classroomArray}</div>
            <Header className="classass" buttonText={'Back'} onClick={this.searchClasses}/>
            
          </div>
        )}
        { this.state.houseRooms === true && (
          <div className="locationPanels">
            <div>{houseRoomArray}</div>
            <Header buttonText={'Back'} onClick={this.searchHouseRooms}/>            
          </div>
        )}
        { this.state.commonAreas === true && (
          <div className="locationPanels">
            <div>{commonPlacesArray}</div>
            <Header buttonText={'Back'} onClick={this.searchCommonAreas}/>
          </div>
        )}
        { this.state.restrictedAreas === true && (
          <div className="locationPanels">
            <div>{restrictedAreasArray}</div>
            <Header buttonText={'Back'} onClick={this.searchRestricedAreas}/>
          </div>
        )}
      </div>



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
  // close = () => {
  //   this.setState({

  //   })
  // }
  focus = place => {
    this.setState({
      focused: place
    })
  }
}

export default LocationDash;
