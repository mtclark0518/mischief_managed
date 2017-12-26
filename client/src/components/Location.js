import React, {Component} from 'react';
import Panel from './Panel'
import Label from './Label'
import StudentContainer from '../containers/StudentContainer'
import StaffContainer from '../containers/StaffContainer'

class Location extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: null,
        }
    }
    componentDidMount(){
        this.setState({
            type: this.props.location.type,
        });
    }

    render() {

    return (
        <div className="Location">
            {!this.props.expanded &&(
                <div>
                    {this.state.type === 'Classroom' && (
                        <Panel data={this.props.name} onClick={this.expandLocation} />
                    )}
                    {this.state.type==="Restricted" && this.props.location.name === 'Common Room' && (
                        <Panel data={this.props.name} onClick={this.expandLocation} />
                    )}
                    {this.state.type==="Restricted" && this.props.location.name !== 'Common Room' && (
                        <Panel data={this.props.location.name} onClick={this.expandLocation} />
                    )}
                    {this.state.type==="Common Area" && (
                        <Panel data={this.props.location.name} onClick={this.expandLocation} />
                    )}
                </div>
            )}
        </div>
    );
    }
    expandLocation = () => {
        let location = this.props.location
        this.props.expand(location)
    }
}
export default Location;
