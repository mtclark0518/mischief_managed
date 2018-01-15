import React, {Component} from 'react';
import StudentContainer from './StudentContainer'
import StaffContainer from './StaffContainer'
import Panel from '../components/Panel'
import Label from '../components/Label'

class Location extends Component {
    giveFocus = () => {
        this.props.focus(this.props.id)
    }
    render() {
        return(
            <div>
                {!this.props.infocus && (
                    <Panel onClick={this.giveFocus} data={this.props.name}/>
                )}
                {this.props.infocus && this.props.infocus.id === this.props.id && (
                    <div>
                        <Label title={this.props.name} onClick={this.props.clear}/>
                        <StaffContainer staff={this.props.staff}/>
                        <StudentContainer castleView={this.props.castleView} sendUpdate={this.props.sendUpdate} students={this.props.students}/>
                    </div>
                )}
            </div>
        )
    }
}
export default Location;
