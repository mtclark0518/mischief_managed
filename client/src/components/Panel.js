import React from 'react'
const Panel = props => {
    return(
        <div className="Panel" onClick={props.onClick}>
            {props.value}
        </div>
    )
}
export default Panel