import React, { Component } from 'react';
import HouseDash from './HouseDash'
import LocationDash from './LocationDash'
class CastleDash extends Component {

    render() {
        return(
            <div>
                <HouseDash students={this.props.students} houses={this.props.houses}/>
                <LocationDash students={this.props.students} locations={this.props.locations}/>
            </div>
        )
    }
}
export default CastleDash;