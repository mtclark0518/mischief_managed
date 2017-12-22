import React, { Component } from 'react';
import axios from 'axios'
import House from '../components/House'
import StudentContainer from './StudentContainer'
import Heading from '../components/Heading'
import '../styles/index.css'



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
    let houseNavigation = this.state.houses.map( house=>{
      return (
        <House
          key={house.id}
          house={house}
          view={'navigation'}
          expanded={this.state.expanded}
          expand={this.expand}
          focused={this.state.focused}
          focus={this.focus}
        />
      )
    })
    let scoreboard = this.state.houses.map( house=>{
      return (
        <House
          key={house.id}
          house={house}
          view={'scoreboard'}
          expanded={this.state.expanded}
          expand={this.expand}
          focused={this.state.focused}
          focus={this.focus}
        />
      )
    })
    return (
    <div className="HouseDash">

      <div className="">
        { this.state.focused !== null && (
          <div className="flexColumn">
            <Heading details={this.state.focused}/>
            <StudentContainer focused={this.state.focused} type={'house'} from={this.state.focused.id}/>
          </div>
        )}
        { this.state.focused === null && (
          <div className="scoreboard">
            {scoreboard}
          </div>
        )}

      </div>

      <div className="houseNavigation">
        {houseNavigation}
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
