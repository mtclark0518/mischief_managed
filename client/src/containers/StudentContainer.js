import React, { Component } from 'react';
import axios from 'axios'
import io from 'socket.io-client'
import Student from './Student'

class StudentContainer extends Component {
  constructor(props){
    super(props)
    this.socket = io()    
    this.state = {
        students: [],
        expanded: false,
        focused: null
    }
  }

  getData(type, id){
    axios({
      method: "GET",
      url: "api/students/" + type + "/" + id
    })
    .then( students => {
      this.setState({ 
        students: students.data
      });
    });
  }

  update(type,id){
    this.setState({focused: null})
    this.getData(type, id);
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

  clear = () => {
    this.setState({
      expanded: false,
      focused: null      
    })
    this.props.clear()
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
                  type={this.props.type}
                  syncScoreboard={this.props.syncScoreboard}
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
                moveStudent={this.props.moveStudent}
                hex={this.props.hex}
                honor={this.props.honor}
                type={this.props.type}
                locations={this.props.locations}
                syncScoreboard={this.props.syncScoreboard}
                expanded={this.state.expanded}
                focused={this.state.focused}
                focus={this.focus}
                close={this.close}
                clear={this.clear} />
            </div>
          )}
          { this.state.focused === null && (
            <div>{students}</div>
          )}
        </div>
    )
  }
  componentDidMount(){
    this.getData(this.props.type, this.props.from)
    this.socket.on('update score', data => {
      this.focus(data.student)
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.from !== this.props.from){
      this.update(nextProps.type, nextProps.from)
    } 
  }
  
}
export default StudentContainer;