import React from 'react'
import '../styles/index.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faTimesCircle, faMinusSquare} from '@fortawesome/fontawesome-free-regular'

const Icon = {
    Close: function(props){
    return(
        <button onClick={props.onClick}>
            <FontAwesomeIcon icon={faTimesCircle}/>
        </button>
    )},
    Back: function(props){
        return(
        <button onClick={props.onClick}>
            <FontAwesomeIcon icon={faMinusSquare}/>
        </button>
    )}
}
export default Icon
