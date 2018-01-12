import React, {Component} from 'react'

class Schedule extends Component {
    constructor(props){
        super(props)
        this.state = {
            hour: null,
            min: null,
        }
    
    }
    componentDidMount(){
        this.setTime()
        setInterval( () => { this.setTime() }, 60000)
    }


    render(){
        return(
            <div>
                {this.state.hour}:{this.state.min}
            </div>
        )
    }

    setTime = () => {
        const time = new Date();
        this.setState({
            hour: time.getUTCHours(),
            min: time.getUTCMinutes(),
        })
        this.setPeriod()
    }
    setPeriod = () => {
        const hour = this.state.hour;
        hour/2 <= 12 ? 
            (hour >= 11 ? this.props.setPeriod('meal') :
                (hour >= 8 ? this.props.setPeriod('class') : 
                    (hour >= 7 ? this.props.setPeriod('meal') : this.props.setPeriod("sleep")))) : 
            (hour >= 22 ? this.props.setPeriod('sleep') : 
                (hour >= 18 ? this.props.setPeriod("down") :    
                    (hour >= 17 ? this.props.setPeriod('meal') : 
                        (hour < 15 ? this.props.setPeriod('class') : this.props.setPeriod('down')))))
    }
}
export default Schedule;