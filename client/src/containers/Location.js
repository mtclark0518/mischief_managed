import React, {Component} from 'react';
import StudentContainer from './StudentContainer'

class Location extends Component {

    render() {

        
        return(
            <div>
                <StudentContainer sendUpdate={this.props.sendUpdate} students={this.props.students}/>
            </div>
        )
    }

}
export default Location;
