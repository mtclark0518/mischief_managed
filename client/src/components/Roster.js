// Reuseable Functional Component that returns a list of Panel Components

import React, {Component} from 'react';
import Student from './Student'
import '../styles/index.css'


const Roster = props => {

    let students = props.students.map(student => {
        return(
            <Student key={student.id} student={student} />
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
