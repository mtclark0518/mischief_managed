import React, {Component} from 'react'
import UpdateForm from '../forms/UpdateForm'
class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            updating: false
        }
        this.update = this.update.bind(this)
    }

    update = () => {
        this.setState({updating:true})
    }
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.name + ' ' + this.props.family + ': ' + this.props.score}
                <button onClick={this.update}></button>
                {this.state.updating && (
                    <UpdateForm update={this.props.id}  sendUpdate={this.props.sendUpdate}/>
                )}
            </div>
        )
    }
  


}
export default Student;


