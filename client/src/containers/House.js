import React, {Component} from 'react'
import StudentContainer from './StudentContainer'
import HouseHeading from '../components/HouseHeading';
class House extends Component {
    giveFocus = () => {
        this.props.focus(this.props.id)
    }
    render() {
        return(
            <div>
                {this.props.infocus && (
                    <div>
                        {this.props.infocus.id == this.props.id && (
                            <div>
                                <HouseHeading details={this.props}/>
                                <StudentContainer students={this.props.students}/>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}
export default House;


