import React, { Component } from 'react';
import axios from 'axios'

const Location = props => {
    return (
        <div className="Location">
            {props.location.name}
        </div>
    );
}
export default Location;
