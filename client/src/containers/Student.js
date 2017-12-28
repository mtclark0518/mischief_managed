import React, {Component} from 'react'
import Panel from '../components/Panel'
import Label from '../components/Label'
import ActionContainer from '../components/ActionContainer'
import UpdateForm from '../forms/UpdateForm'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            moving: false,
        }
    }
    componentDidMount(){

    }

    render(){

        const name = this.props.student.firstName + ' ' + this.props.student.lastName;
        console.log(name)
        return(
            
            <div className="Student">

                {this.props.expanded && this.props.focused !== null && (
                    <div> 
                        <Label title={name} onClick={this.props.close} />
                        <div>Points: {this.props.student.points}</div>
                        
                        {this.props.type === 'location' && (
                            <div>
                                {this.state.moving && (
                                    <UpdateForm 
                                        moveStudent={this.props.moveStudent}
                                        locations={this.props.locations} 
                                        student={this.props.student.id} 
                                        clear={this.clear}/>
                                )}
                                <ActionContainer 
                                    honor={this.honor} 
                                    hex={this.hex} 
                                    move={this.showMovementForm}/>
                            </div>
                        )}
                    </div>
                )}

                {this.props.focused === null && (
                    <Panel onClick={this.expandStudent} data={name} />
                )}
            </div>
        )
    }
    expandStudent = () => {
        this.props.focus(this.props.student)
    }
    showMovementForm = () => {
        this.setState({moving: true})
    }
    close = () => {
        this.setState({moving: false})
    }
    honor = () => {
        this.props.honor(this.props.student.id)
    }
    hex = () => {
        this.props.hex(this.props.student.id)
    }
    clear = () => {
        this.setState({moving: false})
        this.props.clear()

    }


}
export default Student;


