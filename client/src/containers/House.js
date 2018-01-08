import React, {Component} from 'react'
import StudentContainer from './StudentContainer'
class House extends Component {

    render(){
        return(
            <div>
                <StudentContainer students={this.props.students} />
            </div>
        )
    }

}
export default House;


