import React, {Component} from 'react'
import axios from 'axios'
import Panel from '../components/Panel'
import Label from '../components/Label'
import ActionContainer from '../components/ActionContainer'


class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: null,
            lastName: null,
            id: null,
            points: null,
            house: {},
            moving: false
        }
    }
    componentDidMount(){
        this.getData(this.props.student.id)
    }
    getData(id){
    axios({
      method: "GET",
      url: "api/students/" + id
    })
  .then( student => {
    this.setState({ 
        firstName: student.data.firstName,
        lastName: student.data.lastName,
        id: student.data.id,
        points: student.data.points,
        house: student.data.House
      });
    });
  }
    hex = e => {
        e.preventDefault();
        axios({
            method: "PUT",
            url: "api/students/hex/" + this.state.id
        }).then( student =>{
            this.setState({
                points: student.data.points
            });
            this.props.syncScoreboard();
        })

    }
    honor = e => {
        e.preventDefault();
        axios({
            method: "PUT",
            url: "api/students/honor/" + this.state.id
        }).then( student =>{
            this.setState({
                points: student.data.points
            });
            this.props.syncScoreboard();
        })
    }

    showMovementForm = e => {
        e.preventDefault();
        this.setState({
            moving: true
        })
    }
    render(){
        const styles = {
            color: this.state.house.primaryColor,
            border: '1px solid ' + this.state.house.primaryColor,
            boxShadow: '0 0 2px 0px ' + this.state.house.secondaryColor,
        }
        const name = this.props.student.firstName + ' ' + this.props.student.lastName;
        
        return(
            
            <div style={styles} className="Student">

                {this.props.expanded && this.props.focused !== null && (
                    <div> 
                        <Label title={this.state.firstName + ' ' + this.state.lastName} onClick={this.props.close} />
                        <div>Points: {this.state.points}</div>
                        
                        {this.props.type === 'location' && (
                            <ActionContainer honor={this.honor} hex={this.hex} showMovementForm={this.showMovementForm}/>
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

}
export default Student;


