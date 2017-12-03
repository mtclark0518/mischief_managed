import React, { Component } from 'react';
import axios from 'axios'
import Classroom from './Classroom'
class Hogwarts extends Component {
  constructor(props){
    super(props)
    this.state = {
      hogwarts: null,
      locations: [],
      houses: [],
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
    axios({
      method: "GET",
      url: "api/castle"
    })
  .then( hogwarts => {
      console.log(hogwarts)
      this.setState({ 
        hogwarts: hogwarts.data.name,
        locations: hogwarts.data.Locations,
        houses: hogwarts.data.Houses,
      })
    });
  }

  // SetUserName = (name, password) => {
  //   let data = {
  //     name: name,
  //     password: password
  //   }
    
  //   console.log(data)
  //   axios({
  //     method: 'POST',
  //     url: 'api/login',
  //     data: data
  //   })
  //   .then(response => {
  //     console.log(response.data)
  //     let res = response.data;
  //     if(typeof(res) === 'string'){
  //       console.log('got an error')
  //       this.setState({error: 'there was an issue with your login, please check password or try a different username'})
  //     } else {
  //     this.setState({username: response.data.name, error: ''})
  //     this.toggleUser();
  //     }
  //   });
  // };

  render() {
    return (
      <div className="App">
        {this.state.hogwarts}
        <Classroom
          name={this.state.locations}
          />
      </div>
    );
  }
}

export default Hogwarts;
