// Reuseable Functional Component that returns a list of Panel Components

import React, {Component} from 'react';
import Student from './Student'
import '../styles/index.css'


const HouseRoster = props => {
            let rosterStyles = {
            color: props.primary,
            boxShadow: '0 0 5px 1px ' + props.secondary
        }
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
        <div>
                <div style={rosterStyles}> 
                    <div className="studentArrayTitle">{props.title}s:</div>
                    <div>{students}</div>
                </div>
        </div>
    )
};

export default HouseRoster;
