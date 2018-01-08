import React, { Component } from 'react';
import HouseDash from './HouseDash'
import LocationDash from './LocationDash'
import Student from './Student'
class CastleDash extends Component {
    constructor(props){
        super(props)
        this.state = {
            view : 'home'
        }
    }
    changeView = e => {
        console.log(e.target.value)
        this.setState({view: e.target.value})
    }
    render() {

        return(
            <div>
                {this.state.view === 'location' && (
                    <LocationDash students={this.props.students} locations={this.props.locations} sendUpdate={this.props.sendUpdate}/>
                )}
                {this.state.view === 'house' && (
                    <HouseDash students={this.props.students} houses={this.props.houses}/>
                )}
                <button value={'house'} onClick={e => this.changeView(e)}>houses</button><button value={'location'} onClick={e => this.changeView(e)}>locations</button>
            </div>
        )
    }
}
export default CastleDash;