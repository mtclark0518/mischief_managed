import React, { Component } from 'react';
import axios from 'axios'
import LocationList from '../components/LocationList'
import HouseDash from '../components/HouseDash'
import Button from '../components/Button'

class Hogwarts extends Component {
  constructor(props){
    super(props)
    this.state = {
      hogwarts: null,
      houses: [],
      searching: false
    }
    this.toggleSearching = this.toggleSearching.bind(this)
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
    axios({
      method: "GET",
      url: "api/castle"
    })
  .then( hogwarts => {
      console.log(hogwarts)
      this.setState({ 
        hogwarts: hogwarts.data.name,
        houses: hogwarts.data.Houses,
      });
    });
  }

  enter = () => {
    this.toggleSearching()
  }
  
  toggleSearching = () => {
    this.setState(prevState => ({
      searching : !prevState.searching
    }))
  }

  render() {
    
    return (
      <div className="Hogwarts">

        { this.state.searching !== true && (
        <div>
          {this.state.hogwarts}
          <Button 
            text={'enter'}
            onClick={this.enter.bind(this)} />
        </div>
        )}
        { this.state.searching === true && (
          <div>
            <Button 
              text={'exit'}
              onClick={this.enter.bind(this)} />
            <HouseDash houses={this.state.houses}/>
            <LocationList/>
          </div>
        )}
      </div>
    );
  }
}

export default Hogwarts;
