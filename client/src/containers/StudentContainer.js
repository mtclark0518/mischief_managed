import React, { Component } from 'react';
import Student from './Student'
class StudentContainer extends Component {
    render(){
        const students = this.props.students.map( student => {
            return(
                <Student
                    key={'stu' + student.id}
                    id={student.id} 
                    name={student.firstName}
                    family={student.lastName}
                    score={student.points}
                    house={student.House}
                    location={student.Location}
                    sendUpdate={this.props.sendUpdate}
                    />
            )
        })
        return(
            <div>{students}</div>
        )
    }  
}
export default StudentContainer;