// Reuseable Functional Component that returns a list of Panel Components

import React from 'react';
import Panel from './Panel'
import '../styles/panel.css'
const Roster = props => {

    let studentArray = props.students.map(student => {
        console.log(student)
        return(
            <div className="rosterPanel" key={student.id} details={student}>
                <div>{student.firstName} {student.lastName}</div>
            </div>
        );
    });
    return(
        <div> 
            <h3>Roster</h3>
            <div>
                <Panel data={studentArray}/>
            </div>
        </div>

    );
}
export default Roster;
