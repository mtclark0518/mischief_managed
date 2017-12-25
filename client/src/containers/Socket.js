import React, {Component} from 'react'
import io from 'socket.io-client'
import ActionContainer from '../components/ActionContainer'

class Socket extends Component {

    constructor(props){
        super(props)
        this.socket = io()
        
        this.state = {
            message: null
        }
    }
    componentDidMount(){

        this.socket.on('update score', score => {
            this.setState({
                message: score.points
            })
            this.props.syncScoreboard()
        })
    }


render(){
        return(
            <div>{this.state.message}
                <ActionContainer honor={this.honor} hex={this.hex} showMovementForm={this.props.showMovementForm}/>
            </div>
        )
    }
    honor = () => {
        this.socket.emit('honor', this.props.student)
    }
    hex = () => {
        this.socket.emit('hex', this.props.student)
    }
    componentWillUnmount(){
        this.socket.emit('disconnect')
        this.setState({message: null})
    }
}

export default Socket