import React, {Component} from 'react'
// import Button from './Button'
import Panel from './Panel'
class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount(){

    }
    render(){
        let studentStyles = {
            border:'1px solid ' + this.props.houseColors.primary,
            boxShadow: '0 0 2px 1px ' + this.props.houseColors.secondary,
            color: this.props.houseColors.primary,
        }
        let name = this.props.student.firstName + ' ' + this.props.student.lastName
        return(
            <div className="Student" style={studentStyles}>
                <Panel data={name} onClick={this.props.onClick}/>
            </div>
        )
    }
    // switchFocus = () => {
    // }

    // expandStudent = () => {
    // }

    // closeStudent = () => {
    // }
}
export default Student;


