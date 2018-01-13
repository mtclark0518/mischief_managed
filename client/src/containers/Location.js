import React, {Component} from 'react';
import StudentContainer from './StudentContainer'
import StaffContainer from './StaffContainer'
import Panel from '../components/Panel'
import Bar from '../components/Bar'

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
                        <Bar buttonText={this.props.name}/>
                        <StaffContainer staff={this.props.staff}/>
                        <StudentContainer sendUpdate={this.props.sendUpdate} students={this.props.students}/>
                    </div>
                )}
            </div>
        )
    }
}
export default Location;
