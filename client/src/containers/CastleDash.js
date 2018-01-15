import React, { Component } from 'react';
import HouseDash from './HouseDash'
import LocationDash from './LocationDash'
import Panel from '../components/Panel'
import Hallows from '../components/Hallows';
import FooterNav from '../components/FooterNav'
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
                    <FooterNav home={e=>this.changeView('home')} house={e => this.changeView('house')} location={e => this.changeView('location')} />
                )}
            </div>
        )
    }
}
export default CastleDash;