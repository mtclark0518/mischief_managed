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

        const styles = {
            color: colors.primary
        }
        console.log(this.props.house)
        return(
            <div style={styles}>
                {!this.state.updating && (
                    <Panel data={this.props.name + ' ' + this.props.family} onClick={this.update}/>
                )}
                {this.state.updating && (
                    <div>
                        <Label title={this.props.name + ' ' + this.props.family} onClick={this.close}/>
                        <UpdateForm update={this.props.id}  closeForm={this.close} sendUpdate={this.props.sendUpdate}/>
                    </div>
                )}
            </div>
        )
    }
  close = () => {this.setState({updating: false})}
}
export default Student;


