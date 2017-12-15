import React, {Component} from 'react';
import Panel from './Panel'

class Location extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: null
        }
    }
    componentDidMount(){
        this.setState({
            type: this.props.location.type
        });
    }
    render() {
    return (
        <div className="Location">
            {this.state.type === 'Classroom' && (
                <div className="classroom">
                    {this.props.location.Subject.name}
                </div>
            )}
            {this.state.type==="Restricted" && this.props.location.name === 'Common Room' && (
                <div className="houseCommonRoom">
                    {this.props.location.House.name} {this.props.location.name}
                </div>
            )}
            {this.state.type==="Restricted" && this.props.location.name !== 'Common Room' && (
                <div className="restricted">
                    {this.props.location.name}
                </div>
            )}
            {this.state.type==="Common Area" && (
                <div className="commonArea">
                    <Panel data={this.props.location.name} />
                </div>
            )}
        </div>
    );
    }
}
export default Location;
