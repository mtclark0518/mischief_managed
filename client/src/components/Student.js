import React, {Component} from 'react'
// import Button from './Button'
import Panel from './Panel'
import Bar from './Bar'
class Student extends Component {

    render(){

        let name = this.props.student.firstName + ' ' + this.props.student.lastName
        return(
            <div className="Student">
                <Panel onClick={this.expandStudent} data={name} />
            </div>

            
        )
    }

    expandStudent = () => {
        this.props.focus(this.props.student)
    }
}
export default Student;


