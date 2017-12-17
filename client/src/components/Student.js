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
        let name = this.props.student.firstName + ' ' + this.props.student.lastName
        console.log(name)
        return(
            <Panel data={name} />
        )
    }
    switchFocus = () => {
    }

    expandStudent = () => {
    }

    closeStudent = () => {
    }
}
export default Student;


