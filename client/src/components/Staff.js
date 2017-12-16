import React, {Component} from 'react'
// import Button from './Button'
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

        return(
            <div className="Staff">
            {this.state.view === 'house' && (
                <h3>Head of House: {this.props.staff.firstName} {this.props.staff.lastName}</h3>
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


