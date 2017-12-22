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
        let headofhouse = 'Head of House: ' + this.props.staff.firstName + ' ' + this.props.staff.lastName
        let formaltitle = this.props.staff.position + ' ' + this.props.staff.firstName + ' ' + this.props.staff.lastName
        return(
            <div className="Staff">
                {this.state.view === 'house' && (
                    <div className="HeadOfHouse">
                        <Panel data={headofhouse} />
                    </div>
                )}
                {this.state.view === 'location' && (
                    <div className="FormalTitle">
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


