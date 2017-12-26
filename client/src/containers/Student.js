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

    // hex = () => {
    //     // e.preventDefault();
    //     axios({
    //         method: "PUT",
    //         url: "api/students/hex/" + this.state.id
    //     }).then( student =>{
    //         this.setState({
    //             points: student.data.points
    //         });
    //         this.props.syncScoreboard();
    //     })

    // }
    // honor = () => {
    //     // e.preventDefault();
    //     axios({
    //         method: "PUT",
    //         url: "api/students/honor/" + this.state.id
    //     }).then( student =>{
    //         this.setState({
    //             points: student.data.points
    //         });
    //         this.props.syncScoreboard();
    //     })
    // }


    render(){
        const styles = {
            color: this.props.student.House.primaryColor,
            border: '1px solid ' + this.props.student.House.primaryColor,
            boxShadow: '0 0 2px 0px ' + this.props.student.House.secondaryColor,
        }
        const name = this.props.student.firstName + ' ' + this.props.student.lastName;
        
        return(
            
            <div style={styles} className="Student">

                {this.props.expanded && this.props.focused !== null && (
                    <div> 
                        <Label title={this.state.firstName + ' ' + this.state.lastName} onClick={this.props.close} />
                        <div>Points: {this.state.points}</div>
                        
                        {this.props.type === 'location' && (
                            <div>
                                {this.state.moving && (
                                    <UpdateForm close={this.close}/>
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


}
export default Student;


