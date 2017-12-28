import React, { Component } from 'react';
import House from '../components/House'
import StudentContainer from './StudentContainer'
import Heading from '../components/Heading'



class HouseDash extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//         expanded: false,
//         focused: null
//     }
//     // this.expand = this.expand.bind(this)
//   }


// render() {
//     let houseNavigation = this.props.houses.map( house => {
//       return (
//         <House
//           key={house.id}
//           house={house}
//           points={house.points}
//           view={'navigation'}
//           expanded={this.state.expanded}
//           expand={this.expand}
//           focused={this.state.focused}
//           focus={this.focus}
//         />
//       )
//     })
//     let scoreboard = this.props.houses.map( house=>{
//       return (
//         <House
//           key={house.id}
//           house={house}
//           points={house.points}
//           view={'scoreboard'}
//           expanded={this.state.expanded}
//           expand={this.expand}
//           focused={this.state.focused}
//           focus={this.focus}
//         />
//       )
//     })
//     return (
//     <div className="HouseDash">

//       <div className="">
//         { this.state.focused !== null && (
//           <div className="flexColumn">
//             <Heading details={this.state.focused}/>
//             <StudentContainer 
//               syncScoreboard={this.props.syncScoreboard} 
//               focused={this.state.focused} 
//               type={'house'} 
//               from={this.state.focused.id}/>
//           </div>
//         )}
//         { this.state.focused === null && (
//           <div className="scoreboard">
//             {scoreboard}
//           </div>
//         )}

//       </div>

//       <div className="houseNavigation">
//         {houseNavigation}
//       </div>

//     </div>
//     );
//   }
  // expand = () => {
  //   this.setState(prevState => ({
  //     expanded: !prevState.expanded
  //   }))
  // }
  // focus = house => {
  //   this.setState({
  //     focused: house
  //   })
  // }
}

export default HouseDash;
