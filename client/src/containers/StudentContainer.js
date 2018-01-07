import React, { Component } from 'react';
import Student from './Student'
class StudentContainer extends Component {
    render(){
        const students = this.props.students.map( student => {
            console.log(student)
            return(
                <Student
                    key={'Student' + student.id} 
                    name={student.firstName}
                    family={student.lastName}
                    score={student.points}
                    />
            )
        })
        return(
            <div>{students}</div>
        )
    }  
}
export default StudentContainer;