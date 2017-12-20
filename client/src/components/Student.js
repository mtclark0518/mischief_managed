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
            {this.props.student.expanded !== true && (
                <div>
                    <Panel onClick={this.expandStudent} data={name} />
                </div>
            )}
            {this.props.expanded === true && (
                // <div className="">
                //     {this.props.focused === this.props.student && (
                        <div className="">
                             <Panel onClick={this.closeStudent} data={name} />
                         </div>
                //     )}
                //     {this.props.focused !== this.props.student && (
                //         <div className="">
                //             <Panel onClick={this.switchFocus} data={name} />            
                //         </div>
                //     )}
                // </div>
            )}
            </div>

            
        )
    }
    switchFocus = () => {
        let student = this.props.student
        // this.props.focus(student)
    }

    expandStudent = () => {
        this.props.expand()
        let student = this.props.student
        // this.props.focus(student)
    }

    closeStudent = () => {
        this.props.expand()
        // this.props.focus(null)
    }
}
export default Student;


