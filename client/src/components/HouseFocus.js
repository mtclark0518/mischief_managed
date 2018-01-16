import React, { Component } from 'react';

const HouseFocus = props => {
    const giveFocus = event => {
        event.preventDefault()
        console.log(event.target)
        props.focus(event.target.id)
    }

    const data = props.content.map(data => {
        let style = {
            boxShadow: '0 0 1px 0 ' + data.props.colors.primary,
            color: data.props.colors.primary
        }
        return(
            <button 
                key={'ff'+data.key}
                style={style}
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
