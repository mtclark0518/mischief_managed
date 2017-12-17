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
        let title = 'Head of House: ' + this.props.staff.firstName + ' ' + this.props.staff.lastName
        return(
            <div className="Staff">
                {this.state.view === 'house' && (
                    <div className="headOfHouse">
                        <Panel data={title} />
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


