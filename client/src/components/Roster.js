// Reuseable Functional Component that returns a list of Panel Components

import React, {Component} from 'react';
import Student from './Student'
import '../styles/index.css'


const Roster = props => {
    let students = props.students.map(student => {
        let houseColors = {
            primary: props.primary,
            secondary: props.secondary
        }
        console.log(houseColors)
        return(
            <Student key={student.id} student={student} houseColors={houseColors}/>
        );
    });
    return(
        <div className="Roster">
                <div className="studentArray"> 
                    <div className="rosterTitle">{props.title}s:</div>
                    <div>{students}</div>
                </div>
        </div>
    )
};

export default Roster;
