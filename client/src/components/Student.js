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
        let styles = {
            background: this.props.houseColors.primary
        }
        console.log(styles)
        let name = this.props.student.firstName + ' ' + this.props.student.lastName
        return(
            <div >
            <div className="tag" style={styles}>

            </div>
            
                <Panel data={name} />
            </div>
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


