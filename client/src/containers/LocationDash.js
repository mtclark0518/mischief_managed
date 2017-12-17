import React, { Component } from 'react';
import axios from 'axios'
import Panel from '../components/Panel'
import Bar from '../components/Bar'
import Location from '../components/Location'
import Staff from '../components/Staff'
import StudentContainer from './StudentContainer'
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
        expanded: false,
        focused: null
    }
    this.expand = this.expand.bind(this)

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
    const classroomArray = 
    this.state.locations.map( classroom => {
      
      if(classroom.type === 'Classroom'){
        let name = classroom.Subject.name
        console.log(name)
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
    this.state.locations.map( commonroom=>{
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
    this.state.locations.map( place=>{
      if(place.type === 'Common Area'){
        console.log('goobiddity goobitty goo')
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
    this.state.locations.map( place=>{
      if(place.type === 'Restricted'){
          if(place.name !== 'Common Room'){
        console.log('a coodle doodle doo')
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

    
          <div>
  {/*  formats the heading  */}
            { this.state.focused.type !== 'Classroom' && this.state.focused.name !== 'Common Room' &&(
              <h1>{this.state.focused.name}</h1>
            )}
            { this.state.focused.type === 'Classroom' && this.state.focused.Subject.name !== 'Care of Magical Creatures' && (
              <h1> {this.state.focused.Subject.name} {this.state.focused.name}</h1>
            )}
            { this.state.focused.type === 'Classroom' && this.state.focused.Subject.name === 'Care of Magical Creatures' && (
              <h1>{this.state.focused.name}</h1>
            )}
            { this.state.focused.name === 'Common Room' && (
              <h1>{this.state.focused.House.name } { this.state.focused.name}</h1>
            )}

{/*  consistent across all locations  */}
              <StudentContainer from={this.state.focused.id}/>
              <Bar buttonText={'Back'} onClick={this.clear}/> 
          </div>
        )}


        { this.state.focused === null && this.state.classrooms !== true && this.state.houseRooms !== true && this.state.commonAreas !== true && this.state.restrictedAreas !== true && (
          <div>
            <Panel data={'Classrooms'} onClick={this.searchClasses}/>
            <Panel data={'Common Rooms'} onClick={this.searchHouseRooms}/>
            <Panel data={'Public Spaces'} onClick={this.searchCommonAreas}/>
            <Panel data={'Restricted Areas'} onClick={this.searchRestricedAreas}/>
          </div>
        )}
        { this.state.classrooms === true && this.state.expanded === false && (
          <div>
            <div>{classroomArray}</div>
            <Bar buttonText={'Back'} onClick={this.searchClasses}/>
          </div>
        )}
        { this.state.houseRooms === true && this.state.expanded === false && (
          <div>
            <div>{houseRoomArray}</div>
            <Bar buttonText={'Back'} onClick={this.searchHouseRooms}/>            
          </div>
        )}
        { this.state.commonAreas === true && this.state.expanded === false && (
          <div>
            <div>{commonPlacesArray}</div>
            <Bar buttonText={'Back'} onClick={this.searchCommonAreas}/>
          </div>
        )}
        { this.state.restrictedAreas === true && this.state.expanded === false && (
          <div>
            <div>{restrictedAreasArray}</div>
            <Bar buttonText={'Back'} onClick={this.searchRestricedAreas}/>
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
  expand = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }))
  }
  focus = place => {
    this.setState({
      focused: place
    })
  }
  clear = () => {
    this.setState({
      focused: null
    })
  this.expand();
  }
}

export default LocationDash;
