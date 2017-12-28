import React, {Component} from 'react';

import StudentContainer from './StudentContainer'
import Panel from '../components/Panel';


class Location extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         type: null,
    //     }
    // }
    // componentDidMount(){
    //     this.setState({
    //         type: this.props.location.type,
    //     });
    // }

    render() {

    return (
        <div>location
            <StudentContainer />
        </div>
    //     <div className="Location">
    //         {!this.props.expanded &&(
    //             <div>
    //                 {this.state.type === 'Classroom' && (
    //                     <Panel data={this.props.name} onClick={this.expandLocation} />
    //                 )}
    //                 {this.state.type==="Restricted" && this.props.location.name === 'Common Room' && (
    //                     <Panel data={this.props.name} onClick={this.expandLocation} />
    //                 )}
    //                 {this.state.type==="Restricted" && this.props.location.name !== 'Common Room' && (
    //                     <Panel data={this.props.location.name} onClick={this.expandLocation} />
    //                 )}
    //                 {this.state.type==="Common Area" && (
    //                     <Panel data={this.props.location.name} onClick={this.expandLocation} />
    //                 )}
    //             </div>
    //         )}
    //     </div>
    );
    }
    // expandLocation = () => {
    //     let location = this.props.location
    //     this.props.expand(location)
    // }
}
export default Location;
