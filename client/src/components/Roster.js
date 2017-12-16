// Reuseable Functional Component that returns a list of Panel Components

import React from 'react';
import Panel from './Panel'
import '../styles/index.css'
const Roster = props => {

    let people = props.people.map(person => {
        console.log(person)
        return(
            <div className="rosterPanel" details={person}>
                <div>{person.position} {person.firstName} {person.lastName}</div>
            </div>
        );
    });
    return(
        <div> 
            <h3>{props.title}</h3>
            <div>
                <div>{people}</div>
            </div>
        </div>

    );
}
export default Roster;
