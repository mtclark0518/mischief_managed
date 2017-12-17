import React, { Component } from 'react';
import axios from 'axios'
import CastleDash from './CastleDash'
import Bar from '../components/Bar'
import '../styles/index.css'
class Hogwarts extends Component {
  constructor(props){
    super(props)
    this.state = {
      hogwarts: null,
      active: false,
      houses: []
    }
    this.toggleActive = this.toggleActive.bind(this)
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
    console.log(hogwarts.data.Houses)  
    this.setState({ 
        hogwarts: hogwarts.data.name,
        houses: hogwarts.data.Houses
      });
    });
  }

  enter = () => {
    this.toggleActive()
  }
  
  toggleActive = () => {
    this.setState(prevState => ({
      active : !prevState.active
    }))
  }

  render() {
    
    return (
      <div className="Hogwarts">
        { this.state.active !== true && (
            <Bar 
              buttonText={'I solemnly swear that i am up to no good'}
              onClick={this.enter.bind(this)} />
        )}

        { this.state.active === true && (
          <div className="active">
            <Bar 
              buttonText={'Mischief Managed'} 
              onClick={this.enter.bind(this)} />
            <CastleDash houses={this.state.houses}/>              
          </div>
        )}
      </div>
    );
  }
}

export default Hogwarts;
