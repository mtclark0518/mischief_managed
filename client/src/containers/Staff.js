import React, {Component} from 'react'
import Panel from '../components/Panel'
class Staff extends Component {
    render(){
        return(
            <div>{this.props.position + ' ' + this.props.name + ' ' + this.props.family}</div>
        )
    }
}

export default Staff;


