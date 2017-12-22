import React from 'react'
import Staff from './Staff'
const Heading = props => {

let styles = {
  color: props.details.primaryColor,
  borderBottom: '1px solid' + props.details.secondaryColor

}
    return(
            <div className="Heading" style={styles}>
              <div className="flexPrimary">
                <div className="emboldened">{props.details.name} {props.details.mascot}s</div>
                <Staff view={'house'} staff={props.details.Staff}/> 
              </div>

              <div className="flexSecondary">
                <div>Founder: {props.details.founder}</div>
                <div>House Points: {props.details.points}</div>
              </div>
            </div>
    )
}
export default Heading