import React, {Component} from 'react'
import UpdateForm from '../forms/UpdateForm'
import Label from '../components/Label'
import Panel from '../components/Panel'
class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            updating: false
        }
    }
    update = () => {this.setState({updating:true})}
    render(){
        const colors = {
            primary: this.props.house.primaryColor,
            secondary: this.props.house.secondaryColor
        }

        const border = {
            border: '1px solid ' + colors.primary,
            color: colors.primary,
            boxShadow:' 0 0 3px 1px' + colors.secondary
        }
        console.log(this.props)
        return(
            <div className="studentView" style={border}>
                {this.props.castleView === 'house' && (
                    <div>{this.props.name + ' ' + this.props.family}</div>
                )}
                {this.props.castleView === 'location' && (
                    <div>
                        {!this.state.updating && (
                            <div onClick={this.update}>{this.props.name + ' ' + this.props.family}</div>
                        )}
                        {this.state.updating && (
                            <div className="updatingStudent">
                                <Label title={this.props.name + ' ' + this.props.family} onClick={this.close}/>
                                <UpdateForm update={this.props.id} choices={this.props.interaction} closeForm={this.close} sendUpdate={this.props.sendUpdate}/>
                            </div>
                        )}                    
                    </div>
                )}


            </div>
        )
    }
  close = () => {this.setState({updating: false})}
}
export default Student;


