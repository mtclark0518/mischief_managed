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

                {this.props.expanded === true && (
                    <div>
                        <Button onClick={this.expandHouse} text={'back'} />            
                        {this.props.house.name} is in focus
                    </div>
                )}

                {this.props.expanded === true && (
                    <div>
                        <Button onClick={ this.switchFocus } text={'focus'} />            
                        <div>{this.props.house.name}</div>
                        <div>{this.props.house.mascot}</div>
                    </div>
                )}
            </div>
        )
    }
    switchFocus = () => {
        let house = this.props.house.name
        this.props.onFocus(house)
    }

    expandHouse = () => {
        this.props.expand()
    }
}
export default House;