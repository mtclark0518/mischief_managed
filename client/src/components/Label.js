import React from 'react'
import Icon from './Icon'


const Label = props => {
    return(
        <div className="Label">
            <div className="labelItem labelTitle">
                {props.title}
            </div>
            <div className="labelItem labelIcon">
                <Icon.Close onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default Label