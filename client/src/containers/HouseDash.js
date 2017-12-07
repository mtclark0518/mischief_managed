import React, { Component } from 'react';
import axios from 'axios'


import House from '../components/House'




class HouseDash extends Component {
  constructor(props){
    super(props)
    this.state = {
        houses: [],
        expanded: false
    }
    this.expand = this.expand.bind(this)

  }
    componentDidMount(){
    this.getData()
  }

  getData(){
    axios({
      method: "GET",
      url: "api/houses"
    })
  .then( response => {
      console.log(response.data)
      this.setState({ 
        houses: response.data
      })
    });
  }

  render() {
    let houseArray = this.state.houses.map( house=>{
      console.log(house)
      return (
        <House
          key={house.id}
          house={house}
          expanded={this.state.expanded}
          expand={this.expand}
        />
      )
    })

    return (
      <div className="House">
        {houseArray}
      </div>
    );
  }
  expand = () => {
    this.setState(prevState => ({
      expanded : !prevState.expanded
    }))
  }
}

export default HouseDash;
