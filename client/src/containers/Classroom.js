import React, { Component } from 'react';
import axios from 'axios'

class Classroom extends Component {
  constructor(props){
    super(props)
    this.state = {
        
        students: [],
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
    axios({
      method: "GET",
      url: "api/locations"
    })
  .then( students => {
      console.log(students)
      this.setState({ 
        students: students.data,
      })
    });
  }
  render() {
    return (
      <div className="Classroom">
      im a classroom
      </div>
    );
  }
}

export default Classroom;
