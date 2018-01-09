import React, {Component} from 'react'
import StudentContainer from './StudentContainer'
class House extends Component {

    giveFocus = () => {
        this.props.focus(this.props.id)
    }
    render() {
        
        return(
            <div>
                {!this.props.infocus && (
                    <div onClick={this.giveFocus}>{this.props.name}</div>

                )}
                {this.props.infocus && this.props.infocus.id === this.props.id && (

                    <StudentContainer students={this.props.students}/>

                )}
            </div>
        )
    }

}
export default House;


