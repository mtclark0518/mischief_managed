import React, { Component } from 'react';

const HouseFocus = props => {
    const giveFocus = event => {
        event.preventDefault()
        console.log(event.target)
        props.focus(event.target.id)
    }
    const data = props.content.map(data => {
        return(
            <button 
                key={'ff'+data.key}
                id={data.props.id}
                className="secondaryItem"
                onClick={e => giveFocus(e)}>
                {data.props.name}
            </button>
        )
    })
        return (
            <div className="secondaryNav">
                {data}
            </div>
        );
    }
export default HouseFocus;
