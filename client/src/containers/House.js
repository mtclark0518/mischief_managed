import React, {Component} from 'react'
import StudentContainer from './StudentContainer'
import Panel from '../components/Panel'

class House extends Component {
// constructor(props){
//     super(props)
//     this.state={
//         points: null
//     }
// }
// componentDidMount(){
//     this.setState({points: this.props.points})
// }
// componentWillReceiveProps(nextProps){
//   console.log(nextProps.points)
//   console.log(this.props.points)
// }
    render(){
//         let primaryColor = this.props.house.primaryColor;
//         let secondaryColor = this.props.house.secondaryColor;
//         let houseStyles = {
//             background: primaryColor,
//             border: "3px solid " + primaryColor,
//             color: secondaryColor,
//             padding: '0px 1em'
//         }
//         let inFocusStyles = {
//             background: primaryColor,
//             border: "3px solid " + secondaryColor,
//             color: secondaryColor,
//             padding: '0px 1em'

//         }
//         let inSBStyles = {
//             background: 'rgba(245, 245, 245, 1.0)',
//             border: "1px solid " + secondaryColor,
//             boxShadow:'0 0 2px 1px ' + secondaryColor,
//             color: primaryColor

//         }
//         let outerSBStyles = {
//             background: primaryColor,
//             border: "2px solid " + secondaryColor,

//         }
        return(
            <div>house
                <StudentContainer />
            </div>
//             <div className="House">
            
//                 {this.props.view === 'scoreboard' && (
//                     <div className="outerScoreboardContainer" style={outerSBStyles}>
//                         <div className="innerScoreboardContainer" style={inSBStyles}>
//                             <div>{this.props.house.name}</div>
//                             <div className="housePoints">{this.state.points}</div>
//                             <div>{this.props.house.mascot}s</div>
//                         </div>
//                     </div>
//                 )}
//                 {this.props.expanded !== true && this.props.view === 'navigation' &&(
//                     <div className="dashView" style={houseStyles}>
//                         <Panel onClick={this.expandHouse} data={this.props.house.name} />             
//                     </div>
//                 )}

//                 {this.props.expanded === true && this.props.view === 'navigation' && (
//                     <div className="expandedDashView">
//                         {this.props.focused === this.props.house && (
//                             <div className="hasFocus" style={inFocusStyles}>
//                                 <Panel onClick={this.closeHouse} data={this.props.house.name} />
//                             </div>
//                         )}
//                         {this.props.focused !== this.props.house && (
//                             <div className="noFocus" style={houseStyles}>
//                                 <Panel onClick={this.switchFocus} data={this.props.house.name} />            
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
        )
    }
//     switchFocus = () => {
//         let house = this.props.house
//         this.props.focus(house)
//     }
//     expandHouse = () => {
//         this.props.expand()
//         let house = this.props.house
//         this.props.focus(house)
//     }
//     closeHouse = () => {
//         this.props.expand()
//         this.props.focus(null)
//     }
}
export default House;


