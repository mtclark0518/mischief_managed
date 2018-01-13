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
    update = () => {
        this.setState({updating:true})
    }
    render(){
        return(
            <div>
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
  close = () => {
      this.setState({updating: false})
  }
}
export default Student;


