import React from 'react'
const HouseHeading = props => {

let styles = {
  color: props.details.colors.primary,
  borderBottom: '1px solid' + props.details.colors.secondary
}
  return(
    <div className="HouseHeading" style={styles}>
      <div className="flexPrimary">
        <div className="emboldened">{props.details.name} {props.details.mascot}s</div>
        <div className="headOfHouse">Head of House: {props.details.staff[0].firstName} {props.details.staff[0].lastName}</div>
      </div>
      <div className="flexSecondary">
        <div>Founder: {props.details.founder}</div>
        <div>House Points: {props.details.score}</div>
      </div>
    </div>
  )
}
export default HouseHeading