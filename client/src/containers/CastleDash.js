import React, { Component } from 'react';
import HouseDash from './HouseDash'
import LocationDash from './LocationDash'


class CastleDash extends Component {
    constructor(props){
        super(props)
        this.state = {
            view : 'home'
        }
    }
    changeView = newView => {
        this.setState({view: newView})
    }
    render() {

        return(
            <div className="CastleDash">
                {this.state.view === 'location' && (
                    <LocationDash castleView={this.state.view} changeView={this.changeView} students={this.props.students} staff={this.props.staff} locations={this.props.locations} sendUpdate={this.props.sendUpdate}/>
                )}
                {this.state.view === 'house' && (
                    <HouseDash castleView={this.state.view} changeView={this.changeView} students={this.props.students} staff={this.props.staff} houses={this.props.houses}/>
                )}
                {this.state.view === 'home' && (
                    <div>
                        <button onClick={ e => this.changeView('house') }>houses</button>
                        <button onClick={ e => this.changeView('location') }>locations</button>
                    </div>
                )}
            </div>
        )
    }
}
export default CastleDash;