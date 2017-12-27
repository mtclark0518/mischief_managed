import React, {Component} from 'react'
import Panel from '../components/Panel'
import Label from '../components/Label'
import ActionContainer from '../components/ActionContainer'
import UpdateForm from '../forms/UpdateForm'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: null,
            lastName: null,
            id: null,
            points: null,
            house: {},
            location: null,
            moving: false,
        }
    }
    componentDidMount(){

    }

    render(){
        const styles = {
            color: this.props.student.House.primaryColor,
            border: '1px solid ' + this.props.student.House.primaryColor,
            boxShadow: '0 0 2px 0px ' + this.props.student.House.secondaryColor,
        }
        const name = this.props.student.firstName + ' ' + this.props.student.lastName;
        console.log(name)
        return(
            
            <div style={styles} className="Student">

                {this.props.expanded && this.props.focused !== null && (
                    <div> 
                        <Label title={name} onClick={this.props.close} />
                        <div>Points: {this.state.points}</div>
                        
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
    clear = () => {
        this.setState({moving: false})
        this.props.clear()       
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


}
export default Student;


