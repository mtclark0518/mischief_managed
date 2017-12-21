import React, {Component} from 'react'
// import Button from './Button'
import Panel from './Panel'
class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        // let studentStyles = {
        //     border:'1px solid ' + this.props.houseColors.primary,
        //     boxShadow: '0 0 2px 1px ' + this.props.houseColors.secondary,
        //     color: this.props.houseColors.primary,
        // }
        let name = this.props.student.firstName + ' ' + this.props.student.lastName
        return(
            <div className="Student" 
            // style={studentStyles}
            >
                {this.props.student.expanded !== true && (
                    <Panel onClick={this.expandStudent} data={name} />
                )}
                {this.props.student.expanded === true && this.props.student.focused === this.props.student && (
                    <Panel onClick={this.closeStudent} data={name} />
                )}
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


