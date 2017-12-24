import React, {Component} from 'react';
import Panel from './Panel'

class Location extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: null,
            staff: [],
            students: []
        }
    }
    componentDidMount(){
        this.setState({
            type: this.props.location.type,
            staff: this.props.location.Staffs,
            students: this.props.location.Students
        });
    }

    render() {

    return (
        <div className="Location">
            {this.props.expanded !== true &&(
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
        this.props.expand()
        let location = this.props.location
        this.props.focus(location)
    }
}
export default Location;
