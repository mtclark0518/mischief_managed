import React, { Component } from 'react';
import axios from 'axios'


import Location from '../components/Location'




class LocationDash extends Component {
  constructor(props){
    super(props)
    this.state = {
        locations: []    
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
      console.log(locations.data)
      this.setState({ 
        locations: locations.data,

      })
    });
  }

  render() {
    let locationArray = this.state.locations.map( location=>{
      console.log(location)
      return (
        <Location
          key={location.id}
          location={location}
        />
      )
    })

    return (
      <div className="Location">
        {locationArray}
      </div>
    );
  }
}

export default LocationDash;
