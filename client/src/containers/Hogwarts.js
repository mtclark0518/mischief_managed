import React, { Component } from 'react';
import CastleDash from './CastleDash'
import Bar from '../components/Bar'


class Hogwarts extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: false,
    }
    this.activate = this.activate.bind(this)
  }
  activate = () => {
    this.setState(prevState => ({
      active : !prevState.active
    }))
  }
  render() {
    return (

      <div className="Hogwarts">
        { !this.state.active && (
            <Bar buttonText={'I solemnly swear that i am up to no good'} onClick={this.activate} />
        )}
        { this.state.active && (
          <div className="active">
            <Bar buttonText={'Mischief Managed'} onClick={this.activate} />
            <CastleDash /> 
          </div>
        )}
      </div>
    );
  }

}
export default Hogwarts;
