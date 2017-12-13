import React, {Component} from 'react'
import Button from './Button'
import Panel from './Panel'
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
            background: primaryColor,
            border: "2px solid " + secondaryColor,
            color: secondaryColor,
            height: '30px'
        }


        return(
            <div className={houseName} style={houseStyles}>

                {this.props.expanded !== true && (
                    <div className="house dashView">
                        <Panel onClick={this.expandHouse} data={this.props.house.name} />             
                    </div>
                )}



                {this.props.expanded === true && (


                    <div className="house expandedDashView">


                        {this.props.focused === this.props.house && (
                            <div className="hasFocus">
                                <Panel onClick={this.closeHouse} data={this.props.house.name} />
                            </div>
                        )}

                        {this.props.focused !== this.props.house && (
                            <div className="noFocus">
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


