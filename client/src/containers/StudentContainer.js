import React, { Component } from 'react';
import axios from 'axios'
import Student from '../components/Student'

class StudentContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
        students: []
        // expanded: false,
        // focused: null
    }
    // this.expand = this.expand.bind(this)
  }
    componentDidMount(){
    this.getData(this.props.from)
  }

  getData = id => {
    axios({
      method: "GET",
      url: "api/students/location/" + id
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
          // expanded={this.state.expanded}
          // expand={this.expand}
          // focused={this.state.focused}
          // focus={this.focus}
        />
      )
    
    })
    return (
        <div>
          students:
          <div>
            {students}
          </div>
        </div>
    )
}
}
      
    // <div className="HouseDash">
    
    //   <div className="houseDisplay">
    //     { this.state.focused !== null && (
    //       <div className="houseInFocus">
    //         <h1>{this.state.focused.name}</h1>
    //         <Staff view={'house'} staff={this.state.focused.Staff}/>
    //         <Roster title={'Roster:'} people={this.state.focused.Students}/>            
    //       </div>
    //     )}
    //     { this.state.focused === null && (
    //       <div className="scoreboard">
    //         <h1>scoreboard</h1>
    //       </div>
    //     )}
    //   </div>

    //   <div className="houseArray">
    //     {houseArray}
    //   </div>

    // </div>
//   }
//   expand = () => {
//     this.setState(prevState => ({
//       expanded: !prevState.expanded
//     }))
//   }
//   focus = house => {
//     this.setState({
//       focused: house
//     })
//   }

export default StudentContainer;
