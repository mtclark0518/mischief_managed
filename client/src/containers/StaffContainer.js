import React, { Component } from 'react';

class StaffContainer extends Component {

render(){}
}


export default StaffContainer;
import React, { Component } from 'react';
import Student from './Student'
class StudentContainer extends Component {
    render(){
        const students = this.props.students.map( student => {
        console.log(student)
            
            return(
                <Staff
                    key={'sta' + staff.id} 
                    name={staff.firstName}
                    family={staff.lastName}
                    role={staff.role}
                    house={student.House}
                    location={student.Location}
                    />
            )
        })
        console.log(this.props.students)
        return(
            <div>{students}</div>
        )
    }  
}
export default StudentContainer;