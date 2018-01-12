import React from 'react'
const Heading = props => {

let styles = {
  color: props.details.colors.primary,
  borderBottom: '1px solid' + props.details.colors.secondary
}
  return(
    <div className="Heading" style={styles}>
      <div className="flexPrimary">
        <div className="emboldened">{props.details.name} {props.details.mascot}s</div>
      </div>
      <div className="flexSecondary">
        <div>Founder: {props.details.founder}</div>
        <div>House Points: {props.details.score}</div>
      </div>
    </div>
  )
}
export default Heading