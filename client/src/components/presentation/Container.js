import React, { Component } from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import Student from '../stateful/Student'
import Staff from './Staff'
class Container extends Component {




    render(){



        const people = {
            students: this.props.students,
            staff: this.props.staff
        }
        const interaction = (one, two) => {
            console.log(one, two)
            console.log(people.staff)
        }

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
                    sendUpdate={this.props.sendUpdate}
                    students={people.students}
                    interaction={interaction}
                      />
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
                    awareness={staff.awareness}
                    severity={staff.severity}
                    biasCorruption={staff.biasCorruption}
                    />
            )
        })  
        return(
            <div>
                {this.props.castleView === 'location' && (
                    <div className="STContainer">
                        {staff} 
                        {students}
                    </div>
                )}
                {this.props.castleView === 'house' && (
                    <div className="STContainer">
                        {students}
                    </div>
                )}
            </div>
        )
    }  
    interaction = (people,staff) => {
        console.log(people)
    }
}
export default Container;