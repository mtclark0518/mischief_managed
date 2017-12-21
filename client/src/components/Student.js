import React, {Component} from 'react'
// import Button from './Button'
import Panel from './Panel'
import Bar from './Bar'
class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        let name = this.props.student.firstName + ' ' + this.props.student.lastName
        return(
            <div className="Student">
                {this.props.student.expanded === true && this.props.student.focused === this.props.student && (
                <Bar onClick={this.props.close} buttonText={name} />
                )}
                <Panel onClick={this.expandStudent} data={name} />
            </div>

            
        )
    }

    expandStudent = () => {
        this.props.expand()
        let student = this.props.student
        this.props.focus(student)
    }

    closeStudent = () => {
        this.props.close();
    }
}
export default Student;


