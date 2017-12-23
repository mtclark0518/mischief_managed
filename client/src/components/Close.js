import React from 'react'
import '../styles/index.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import icons from '@fortawesome/fontawesome-free-regular'


const Close = props => {
let icon = icons.faTimesCircle
    return(
        <button onClick={props.onClick}>
            <FontAwesomeIcon icon={icon}/>
        </button>
    )
}
export default Close