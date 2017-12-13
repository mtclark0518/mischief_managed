//renders evenly spaced list items that span the full width of the screen
//items have a click function 
import React from 'react'
import '../styles/panel.css'
const Panel = props => {

    return(
        <div className="Panel" onClick={props.onClick}>
            {props.data}
        </div>
    )
}
export default Panel