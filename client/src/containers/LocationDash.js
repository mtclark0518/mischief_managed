import React, { Component } from 'react';
import axios from 'axios'
import Location from '../components/Location'
import Roster from '../components/Roster'




class LocationDash extends Component {
  constructor(props){
    super(props)
    this.state = {
        locations: [],
        expanded: false,
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
    let locationArray = this.state.locations.map( location=>{
      return (
        <Location
          key={location.id}
          location={location}
          expanded={this.state.expanded}
          focused={this.state.focused}
        />
      )
    })

    return (


      <div className="LocationDash">

        <div className="locationArray">
          {locationArray}
        </div>
      </div>
    );
  }
}

export default LocationDash;
