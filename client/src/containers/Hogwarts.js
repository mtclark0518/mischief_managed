import React, { Component } from 'react';
import axios from 'axios'
import CastleDash from './CastleDash'
import Bar from '../components/Bar'
import Footer from '../components/Footer'
import '../styles/index.css'



class Hogwarts extends Component {
  constructor(props){
    super(props)
    this.state = {
      hogwarts: null,
      active: false,
      houses: [],
    }
    this.activate = this.activate.bind(this)
  }




  render() {
    const houseCupStandings = this.state.houses.map(house => {
      console.log(house)
      return(
        <div>kk</div>
      )
    })
    return (
      <div className="Hogwarts">
        { this.state.active !== true && (
            <Bar 
              buttonText={'I solemnly swear that i am up to no good'}
              onClick={this.enter.bind(this)} />
        )}

        { this.state.active === true && (
          <div className="active">
            <Bar buttonText={'Mischief Managed'} onClick={this.enter.bind(this)} />
            <CastleDash />
          </div>
        )}
      </div>
    );
  }
  enter = () => {
    this.activate()
  }
  
  activate = () => {
    this.setState(prevState => ({
      active : !prevState.active
    }))
  }
}

export default Hogwarts;
