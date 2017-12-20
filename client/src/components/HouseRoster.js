// Reuseable Functional Component that returns a list of Panel Components

import React from 'react';
import Student from './Student'
import '../styles/index.css'
import Panel from './Panel'


const HouseRoster = props => {
    let students = props.students.map(student => {
        let houseColors = {
            primary: props.primary,
            secondary: props.secondary
        }
        return(
            <Student key={student.id} student={student} houseColors={houseColors} onClick={props.onClick} />
        );
    });
    return(
        <div className="HouseRoster">
            <div className="RosterTitle">{props.title}s:</div>
            <div className="RosterStudents">
                <Panel data={students} />
            </div>
        </div>
    )
};

export default HouseRoster;
