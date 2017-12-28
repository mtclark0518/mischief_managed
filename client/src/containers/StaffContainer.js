import React, { Component } from 'react';
import axios from 'axios'
import Staff from './Staff'

class StaffContainer extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //       staff: []
  //   }
  // }
  //   componentDidMount(){
  //   this.getData(this.props.from)
  // }

  // getData = id => {
  //   axios({
  //     method: "GET",
  //     url: "api/staff/location/" + id
  //   })
  // .then( staff => {
  //   this.setState({ 
  //       staff: staff.data
  //     })
  //   });
  // }

  // render() {
  //   let staff = this.state.staff.map( staff => {
  //     return (
  //       <Staff
  //         key={staff.id}
  //         staff={staff}
  //         view={'location'}
  //       />
  //     )
    
  //   })
  //   return (
  //       <div className="Container">
  //           {staff}
  //       </div>
  //   )
  // }
}


export default StaffContainer;
