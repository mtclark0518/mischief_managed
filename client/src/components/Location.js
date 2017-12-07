import React from 'react';


const Location = props => {
    console.log(props.location)
    return (
        <div className="Location">
        {props.location.name}
        </div>
    );
}
export default Location;
