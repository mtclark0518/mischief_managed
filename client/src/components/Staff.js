import React, {Component} from 'react'
// import Button from './Button'
import Panel from './Panel'
class Staff extends Component {
    constructor(props){
        super(props)
        this.state = {
            view: null,
        }
    }
    componentDidMount(){
        this.setState({
            view: this.props.view,
        });
    }
    render(){
        let staffStyles = {
            boxShadow:'0 0 3px 1px rgba(25,25,25,0.2)',
            border:'1px solid rgba(25,25,25,0.2)',
            color: 'black',
            fontSize: '1.2em'
        }
        let headofhouse = 'Head of House: ' + this.props.staff.firstName + ' ' + this.props.staff.lastName
        let formaltitle = this.props.staff.position + ' ' + this.props.staff.firstName + ' ' + this.props.staff.lastName
        return(
            <div className="StaffContainer">
                {this.state.view === 'house' && (
                    <div className="staff headOfHouse">
                        <Panel data={headofhouse} />
                    </div>
                )}
                {this.state.view === 'location' && (
                    <div style={staffStyles} className="staff formalTitle">
                        <Panel data={formaltitle} />
                    </div>
                )}
            </div>
        )
    }


    switchFocus = () => {
    }
    expandStaff = () => {
    }
    closeStaff = () => {
    }
    
    componentWillUnmount(){
        this.setState({
            view: null
        })
    }
}

export default Staff;


