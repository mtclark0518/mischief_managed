import React, {Component} from 'react'
import Button from './Button'
import Panel from './Panel'
import '../styles/index.css'

class House extends Component {
    render(){
        let houseName = this.props.house.name;
        let primaryColor = this.props.house.primaryColor;
        let secondaryColor = this.props.house.secondaryColor;
        let houseStyles = {
            background: primaryColor,
            border: "3px solid " + primaryColor,
            color: secondaryColor,
            padding: '0px 1em'
        }
        let inFocusStyles = {
            background: primaryColor,
            border: "3px solid " + secondaryColor,
            color: secondaryColor,
            padding: '0px 1em'

        }
        let inSBStyles = {
            background: 'rgba(245, 245, 245, 1.0)',
            border: "1px solid " + secondaryColor,
            boxShadow:'0 0 2px 1px ' + secondaryColor,
            color: primaryColor

        }
        let outerSBStyles = {
            background: primaryColor,
            border: "2px solid " + secondaryColor,

        }
        return(
            <div className="House">
            
                {this.props.view === 'scoreboard' && (
                    <div className="outerScoreboardContainer" style={outerSBStyles}>
                        <div className="innerScoreboardContainer" style={inSBStyles}>
                            <div>{this.props.house.name}</div>
                            <div className="housePoints">{this.props.house.points}</div>
                            <div>{this.props.house.mascot}s</div>
                        </div>
                    </div>
                )}
                {this.props.expanded !== true && this.props.view === 'navigation' &&(
                    <div className="dashView" style={houseStyles}>
                        <Panel onClick={this.expandHouse} data={this.props.house.name} />             
                    </div>
                )}

                {this.props.expanded === true && this.props.view === 'navigation' && (
                    <div className="expandedDashView">
                        {this.props.focused === this.props.house && (
                            <div className="hasFocus" style={inFocusStyles}>
                                <Panel onClick={this.closeHouse} data={this.props.house.name} />
                            </div>
                        )}
                        {this.props.focused !== this.props.house && (
                            <div className="noFocus" style={houseStyles}>
                                <Panel onClick={this.switchFocus} data={this.props.house.name} />            
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
    switchFocus = () => {
        let house = this.props.house
        this.props.focus(house)
    }
    expandHouse = () => {
        this.props.expand()
        let house = this.props.house
        this.props.focus(house)
    }
    closeHouse = () => {
        this.props.expand()
        this.props.focus(null)
    }
}
export default House;


