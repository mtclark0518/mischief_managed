//renders evenly spaced list items that span the full width of the screen
//items have a click function 
import React from 'react'
const Panel = props => {
    

    return(
        <div className="Panel" onClick={props.onClick}>
            <div className="panelData">{props.data}</div>
        </div>
    )
}
export default Panel