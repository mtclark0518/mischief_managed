import React, {Component} from 'react'

class Schedule extends Component {
    constructor(props){
        super(props)
        this.state = {
            hour: null,
            min: null,
            sec: null,
            // day: ['sleep', 'meal', 'first', 'second', 'third', 'fourth','meal', 'fifth', 'sixth', 'seventh', 'study', 'meal', 'down', 'sleep' ]
        }
    
    }
    componentDidMount(){
        this.setTime()
        setInterval( () => { this.setTime() },1000)
    }


    render(){
        return(
            <div>
                {this.state.hour}:{this.state.min}:{this.state.sec}
            </div>
        )
    }

    setTime = () => {
        const time = new Date();
        this.setState({
            hour: time.getUTCHours(),
            min: time.getUTCMinutes(),
            sec: time.getUTCSeconds()
        })
        this.setPeriod()
    }
    setPeriod = () => {
        const hour = this.state.hour;
        hour/2 <= 12 ? 
            (hour >= 11 ? this.props.setPeriod('lunch') :
                (hour >= 8 ? this.props.setPeriod('class') : 
                    (hour >= 7 ? this.props.setPeriod('breakfast') : this.props.setPeriod("sleep")))) : 
            (hour >= 22 ? this.props.setPeriod('sleep') : 
                (hour >= 18 ? this.props.setPeriod("evening") :    
                    (hour >= 17 ? this.props.setPeriod('dinner') : 
                        (hour < 15 ? this.props.setPeriod('class') : this.props.setPeriod('afternoon')))))




        // if (hour === 8 ){ this.setState({period: 'first'})}
        // if (hour === 9){ this.setState({period: 'second'})}
        // if (hour === 10 ){ return 'third'}
        // if (hour === 11 ){ return 'lunch'}
        // if (hour ===  12){ return 'fourth'}
        // if (hour === 13 ){ return 'fifth'}
        // if (hour === 14 ){ return 'sixth'}
        // if (hour === 15 ){ return 'seventh'}
        // if (hour >= 16 && hour < 19 ){ return 'down'}
        // if (hour === 18 && min === 30 ){ return 'dinner'}
    }
}
export default Schedule;