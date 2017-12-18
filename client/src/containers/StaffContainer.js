import React, { Component } from 'react';
import axios from 'axios'
import Staff from '../components/Staff'

class StaffContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
        staff: []
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
      url: "api/staff/location/" + id
    })
  .then( staff => {
      console.log(staff)  
    this.setState({ 
        staff: staff.data
      })
    });
  }

  render() {
    let staff = this.state.staff.map( staff => {
      return (
        <Staff
          key={staff.id}
          staff={staff}
          view={'location'}
          // expanded={this.state.expanded}
          // expand={this.expand}
          // focused={this.state.focused}
          // focus={this.focus}
        />
      )
    
    })
    return (
        <div className="Container">
            {staff}
        </div>
    )
}
}

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

export default StaffContainer;
