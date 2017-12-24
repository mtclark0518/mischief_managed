import React, {Component} from 'react'
import axios from 'axios'
import Panel from './Panel'
import Label from './Label'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: null,
            lastName: null,
            id: null,
            points: null,
            house: {}
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
      console.log(student)
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
        })
        
    }
    render(){
        let styles = {
            color: this.state.house.primaryColor,
            border: '1px solid ' + this.state.house.primaryColor,
            boxShadow: '0 0 2px 0px ' + this.state.house.secondaryColor,
        }
        let name = this.props.student.firstName + ' ' + this.props.student.lastName;
        
        return(
            
            <div style={styles} className="Student">
                {this.props.expanded && this.props.focused !== null &&(
                    <div>
                    <Label title={this.state.firstName + ' ' + this.state.lastName} onClick={this.props.close} />
                        <div>Points: {this.state.points}</div>
                        <button onClick={e => this.hex(e)}>hex</button>
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


