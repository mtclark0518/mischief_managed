import React, { Component } from 'react';
import axios from 'axios'


import House from '../components/House'




class HouseDash extends Component {
  constructor(props){
    super(props)
    this.state = {
        houses: [],
        expanded: false,
        inFocus: null
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
          focused={this.state.inFocus}
          focus={this.focus}
        />
      )
    })

    return (
      <div className="HouseDash">

      { this.state.inFocus !== null && (
        <div className="houseInFocus">
          I'm focused on {this.state.inFocus.name} 
        </div>
      )}

        <div className="houseArray">
          {houseArray}
        </div>

      </div>
    );
  }
  expand = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }))
  }
  focus = house => {
    this.setState({
      inFocus: house
    })
  }
}

export default HouseDash;
