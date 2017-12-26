import React, {Component} from 'react'
import io from 'socket.io-client'
import ActionContainer from '../components/ActionContainer'

class Socket extends Component {

    constructor(props){
        super(props)
        this.socket = io()
    }
    componentDidMount(){
        this.socket.on('update', () => {
            this.props.syncScoreboard()
        })
        this.socket.on('refresh', data => {
            console.log(data)
        })
    }


render(){
        return(
            <div>
                <ActionContainer 
                    honor={this.honor} 
                    hex={this.hex} 
                    move={this.move}/>
            </div>
        )
    }
    move = () => {
        this.props.showMovementForm()
        // this.socket.emit('move', {
        //     who: this.props.student,
        //     to: 16
        // })
    }
    honor = () => {
        this.socket.emit('honor', this.props.student)
    }
    hex = () => {
        this.socket.emit('hex', this.props.student)
    }
}

export default Socket