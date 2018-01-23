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

            people.staff.forEach( person => {
                let bias = !person.House? 'none' : person.House.name;
                person.bias = bias
                let through = {
                    id: person.id,
                    bias: bias,
                    awareness: parseFloat(person.awareness),
                    severity: parseFloat(person.severity)
                }
                let from = people.students.filter( student => student.id == one).map(student => {
                    return {
                        id: student.id,
                        bias: student.House.name
                    }
                })
                let to = people.students.filter( student => student.id == two).map(student => {
                    return {
                        id: student.id,
                        bias: student.House.name
                    }
                })
                let action = {
                    from: from[0],
                    to: to[0],
                    through: through
                }
                let awareness = action.through.awareness; 

                const assignBias = () => {
                    if(action.from.bias == action.through.bias) {
                        awareness += 0.15
                    } else if(action.to.bias == action.through.bias) { 
                        awareness -= 0.15
                    }
                    processAttempt(awareness)
                }
                const processAttempt = odds => {
                    let chance = Math.random()
                    chance > odds ? successResponse() : failureResponse()
                }

                const failureResponse = () => {
                    
                    console.log('this is the fucking failure response')
                    let impact = parseInt((-10 * action.through.severity)/2);
                    console.log(impact)
                    this.props.sendUpdate(action.from.id, impact )
                }
                const successResponse = () => {
                    
                    console.log('this is the fucking succccceeesss')
                    this.props.sendUpdate(action.from.id, 15);
                    this.props.sendUpdate(action.to.id, -3);
                };

                assignBias();
            });

        };


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
}
export default Container;