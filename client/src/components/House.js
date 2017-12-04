import React from 'react'

const House = props => {
    return(
        <div className={props.house.name}>
        <h1>{props.house.name}</h1>
        
        </div>

    )
}
export default House;