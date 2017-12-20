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

componentWillUpdate(nextProps, nextState){
  if(nextProps.from !== this.props.from){
    this.update(nextProps.type, nextProps.from)
  }
}
update(type,id){
  this.getData(type, id);
}
getData(type, id){
    axios({
      method: "GET",
      url: "api/students/" + type + "/" + id
    })
  .then( students => {
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
  focus = student => {
    this.setState({
      focused: student
    })
  }

}
export default StudentContainer;