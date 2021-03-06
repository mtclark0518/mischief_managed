import React, {Component} from 'react'
import Container from './Container'
import HouseHeading from './HouseHeading';
class House extends Component {
    giveFocus = () => {
        this.props.focus(this.props.id)
    }
    render() {
        return(
            <div>
                {this.props.infocus && (
                    <div>
                        {this.props.infocus.id == this.props.id && (
                            <div>
                                <HouseHeading details={this.props}/>
                                <Container 
                                    castleView={this.props.castleView} 
                                    students={this.props.students}
                                    staff={this.props.staff}/>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}
export default House;


