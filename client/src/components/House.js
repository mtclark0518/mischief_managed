import React, {Component} from 'react'
import Button from './Button'
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
        
        return(
            <div className={this.props.house.name}>

                {this.props.expanded !== true && (
                    <div>
                        <Button onClick={this.expandHouse} text={'expand'} />            
                        <div>{this.props.house.name}</div>
                        <div>{this.props.house.points}</div>
                    </div>
                )}

                {this.props.expanded === true && this.props.focused === this.props.house.name && (
                    <div>
                        <Button onClick={this.closeHouse} text={'close'} />            
                        {this.props.house.name} is in focus
                        <div>{this.props.house.Students[4].firstName}</div>
                    </div>
                )}


            </div>
        )
    }
    switchFocus = () => {
        let house = this.props.house.name
        this.props.focus(house)
    }

    expandHouse = () => {
        this.props.expand()
        let house = this.props.house.name
        this.props.focus(house)
    }

    closeHouse = () => {
        this.props.expand()
        this.props.focus(null)
    }
}
export default House;