import React, { Component } from 'react';
import axios from 'axios'
import Student from '../components/Student'

class StudentContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
        students: [],
        expanded: false,
        focused: null
    }
    this.expand = this.expand.bind(this)
  }
    componentDidMount(){
    this.getData(this.props.type, this.props.from)
  }

  getData(type, id){
    axios({
      method: "GET",
      url: "api/students/" + type + "/" + id
    })
  .then( students => {
      console.log(students)  
    this.setState({ 
        students: students.data
      })
    });
  }

  render() {
    let students = this.state.students.map( student => {
      let houseColors = {
        primary: student.House.primaryColor,
        secondary: student.House.secondaryColor
      }
      return (
        <Student
          key={student.id}
          student={student}
          houseColors={houseColors}
          expanded={this.state.expanded}
          expand={this.expand}
          focused={this.state.focused}
          focus={this.focus}
        />
      )
    
    })
    return (
        <div className="Container">
        { this.state.expanded === false && (
            <div>{students}</div>
        )}
        { this.state.expanded === true && (
            <div>expanded {students}</div>
        )}
        </div>
    )
  }
  expand = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }))
  }
  focus = house => {
    this.setState({
      focused: house
    })
  }

}
export default StudentContainer;