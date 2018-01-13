import React, { Component } from 'react';


const FourFocus = props => {


    const giveFocus = event => {
        event.preventDefault()
        console.log(event.target)
        props.focus(event.target.id)
    }

    const data = props.content.map(data => {
    

        return(
            <div 
                key={'ff'+data.key}
                id={data.props.id}
                onClick={e => giveFocus(e)}>
                {data.props.name}
            </div>
        )
    })
        return (
            <div className="FourFocus">
                {data}
            </div>
        );
    }
export default FourFocus;
