import React, {Component} from 'react'
// import Button from './Button'
import Panel from './Panel'
import Bar from './Bar'
class Student extends Component {

    render(){
        let styles = {
            color: this.props.student.House.primaryColor,
            border: '1px solid ' + this.props.student.House.primaryColor,
            boxShadow: '0 0 2px 0px ' + this.props.student.House.secondaryColor,

        }
        let house = this.props.student.House.primaryColor;
        let name = this.props.student.firstName + ' ' + this.props.student.lastName
        return(
            <div style={styles} className="Student">
                <Panel onClick={this.expandStudent} data={name} />
            </div>

            
        )
    }

    expandStudent = () => {
        this.props.focus(this.props.student)
    }
}
export default Student;


