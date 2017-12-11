// Reuseable Functional Component that returns a list of Panel Components

import React from 'react';
import Panel from './Panel'
import Student from './Student'
const Roster = props => {

    let studentArray = props.students.map(student => {
        console.log(student)
        return(
            <div key={student.id} details={student}>
                <div>{student.firstName} {student.lastName}</div>
            </div>
        );
    });
    return(
        <div> 
        <h3>Roster</h3>
        <Panel data={studentArray}/>
        </div>
    );
}
export default Roster;
