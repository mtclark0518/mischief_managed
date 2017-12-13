import React, {Component} from 'react'
import Button from './Button'
import '../styles/house.css'
class House extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
        console.log(this.props.house.name)
    }
    render(){

        let houseName = this.props.house.name;
        let primaryColor = this.props.house.primaryColor;
        let secondaryColor = this.props.house.secondaryColor;
        let houseStyles = {
            backgroundColor: primaryColor,
            color: secondaryColor
        }


        return(
            <div className={houseName} style={houseStyles}>

                {this.props.expanded !== true && (
                    <div className="house dashView">
                        <Button onClick={this.expandHouse} text={this.props.house.name} />             
                    </div>
                )}

                {this.props.expanded === true && (
                    <div className="house expandedDashView">
                        {this.props.focused === this.props.house && (
                            <div className="inFocus">
                                <Button onClick={this.closeHouse} text={this.props.house.name} />
                            </div>
                        )}

                        {this.props.focused !== this.props.house && (
                            <div className="outOfFocus">
                                <Button onClick={this.switchFocus} text={this.props.house.name} />            
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


