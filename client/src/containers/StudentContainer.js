import React, { Component } from 'react';
import axios from 'axios'
import Student from '../components/Student'
import Bar from '../components/Bar'

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
          {  this.props.type === 'house' && this.state.focused !== null && this.state.expanded === true && this.props.focused.id === this.state.focused.House.id && (
              <div>
                <Student
                  key={this.state.focused.id}
                  student={this.state.focused}
                  expand={this.expand}
                  focus={this.focus}
                  close={this.close} >
                </Student>
                    <Bar buttonText={'close'} onClick={this.close}/>

              </div>
          )}
              <div>{students}</div>
        </div>
    )
  }
  expand = () => {
    this.setState({
      expanded: true
    })
  }
  focus = student => {
    this.setState({
      focused: student
    })
  }
  close = () => {
    this.setState({
      expanded: false,
      focused: null
    })
  }

}
export default StudentContainer;