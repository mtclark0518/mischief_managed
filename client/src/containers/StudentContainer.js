import React, { Component } from 'react';
import axios from 'axios'
import Student from '../components/Student'
import Bar from '../components/Bar'
import Button from '../components/Bar'
import Panel from '../components/Panel'
import Icon from '../components/Icon'


class StudentContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
        students: [],
        expanded: false,
        focused: null
    }
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
    this.setState({ 
        students: students.data,
        focused: null
      });
    });
  }
  update(type,id){
    this.getData(type, id);
  }
componentWillReceiveProps(nextProps){
  if(nextProps.from !== this.props.from){
    this.update(nextProps.type, nextProps.from)
  }
}
  render() {
    let students = this.state.students.map( student => {
      return (
        <Student
          key={student.id}
          student={student}
          expanded={this.state.expanded}
          expand={this.expand}
          focused={this.state.focused}
          focus={this.focus}
          close={this.close}
        />
      )
    })
    return (
        <div className="Container">
          { this.props.type === 'house' && this.state.focused !== null && this.state.expanded && this.props.focused.id === this.state.focused.House.id && (
              <div className="focusContainer">
                <Student
                  key={this.state.focused.id}
                  student={this.state.focused}
                  expanded={this.state.expanded}
                  focused={this.state.focused}
                  focus={this.focus}
                  close={this.close} />
              </div>
          )}
          { this.props.type === 'location' && this.state.focused !== null && this.state.expanded && (
            <div className="focusContainer">
                <Student
                  key={this.state.focused.id}
                  student={this.state.focused}
                  expanded={this.state.expanded}
                  focused={this.state.focused}
                  focus={this.focus}
                  close={this.close} />
            </div>
          )}
          { this.state.focused === null && (
            <div>{students}</div>
          )}
        </div>
    )
  }
  focus = student => {
    this.setState({
      expanded: true,
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