import React, {Component} from 'react'

class Student extends Component {
    render(){
        console.log(this.props.name)
        return(
            <div>{this.props.name + ' ' + this.props.family + ': ' + this.props.score}</div>
        )
    }
  


}
export default Student;


