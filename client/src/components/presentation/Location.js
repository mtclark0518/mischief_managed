import React, {Component} from 'react';
import Container from './Container'
import Panel from './Panel'
import Label from './Label'

class Location extends Component {
    giveFocus = () => {
        this.props.focus(this.props.id)
    }
    render() {
        return(
            <div>
                {!this.props.infocus && (
                    <Panel onClick={this.giveFocus} data={this.props.name}/>
                )}
                {this.props.infocus && this.props.infocus.id === this.props.id && (
                    <div>
                        <Label title={this.props.name} onClick={this.props.clear}/>
                        <Container 
                            castleView={this.props.castleView} 
                            sendUpdate={this.props.sendUpdate} 
                            students={this.props.students}
                            staff={this.props.staff}
                            />
                    </div>
                )}
            </div>
        )
    }
}
export default Location;
