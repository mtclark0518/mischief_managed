import React, {Component} from 'react'
import Button from './Button'
class House extends Component {
    constructor(props){
        super(props)
        this.state = {
            inFocus : false
        }
        this.focus = this.focus.bind(this)
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

                {this.props.expanded === true && this.state.inFocus === true && (
                    <div>
                        <Button onClick={this.expandHouse} text={'back'} />            
                        {this.props.house.name} is in focus
                    </div>
                )}

                {this.props.expanded === true && this.state.inFocus !== true && (
                    <div>
                        <Button onClick={this.expandHouse} text={'focus'} />            
                        <div>{this.props.house.name}</div>
                        <div>{this.props.house.mascot}</div>
                    </div>
                )}
            </div>
        )
    }
    focus = () => {
        this.setState(prevState => ({
        inFocus : !prevState.inFocus
        }))
    }
    expandHouse = () => {
        this.focus();
        this.props.expand()
    }
}
export default House;