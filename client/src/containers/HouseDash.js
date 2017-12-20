import React, { Component } from 'react';
import axios from 'axios'
import House from '../components/House'
import Panel from '../components/Panel'
import Staff from '../components/Staff'
import HouseRoster from '../components/HouseRoster'
import '../styles/index.css'
import StudentContainer from './StudentContainer'
import Heading from '../components/Heading'



class HouseDash extends Component {
  constructor(props){
    super(props)
    this.state = {
        houses: [],
        students:[],
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
      url: "api/houses"
    })
  .then( response => {
      this.setState({ 
        houses: response.data
      })
    });
  }

  render() {
    let houseArray = this.state.houses.map( house=>{
      return (
        <House
          key={house.id}
          house={house}
          expanded={this.state.expanded}
          expand={this.expand}
          focused={this.state.focused}
          focus={this.focus}
        />
      )
    })
    return (
    <div className="HouseDash">
      <div className="flexColumn">

        { this.state.focused !== null && (
          <div>
            <Heading details={this.state.focused}/>
            <StudentContainer type={'house'} from={this.state.focused.id}/>
          </div>
        )}
        { this.state.focused === null && (
          <div className="scoreboard">
            <h1>House Cup Standings</h1>
          </div>
        )}
      </div>

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
      focused: house
    })
  }
}

export default HouseDash;
