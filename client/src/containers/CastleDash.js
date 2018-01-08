import React, { Component } from 'react';
import HouseDash from './HouseDash'
import LocationDash from './LocationDash'
import Student from './Student'
class CastleDash extends Component {



    

    render() {


        return(
            <div>
                <HouseDash students={this.props.students} houses={this.props.houses}/>
                <LocationDash students={this.props.students} locations={this.props.locations} sendUpdate={this.props.sendUpdate}/>
            </div>
        )
    }
}
export default CastleDash;