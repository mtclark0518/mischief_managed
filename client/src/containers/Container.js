import React, { Component } from 'react';
import Student from './Student'
import Staff from './Staff'
class Container extends Component {
    render(){
        const students = this.props.students.map( student => {
            return(
                <Student
                    key={'stu' + student.id}
                    id={student.id} 
                    castleView={this.props.castleView} 
                    name={student.firstName}
                    family={student.lastName}
                    score={student.points}
                    house={student.House}
                    location={student.Location}
                    sendUpdate={this.props.sendUpdate} />
            )
        })
        const staff = this.props.staff.map( staff => {
            return(
                <Staff
                    key={'sta' + staff.id} 
                    name={staff.firstName}
                    family={staff.lastName}
                    position={staff.position}
                    house={staff.House}
                    location={staff.Location}
                    subject={staff.Subject}
                    />
            )
        })  
        return(
            <div>
                {this.props.castleView === 'location' && (
                    <div className="STContainer">{staff} {students}</div>
                )}
                {this.props.castleView === 'house' && (
                    <div className="STContainer">{students}</div>
                )}
            </div>
        )
    }  
}
export default Container;