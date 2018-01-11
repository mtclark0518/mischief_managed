import React, {Component} from 'react'
    

class Scoreboard extends Component {
    render(){
        const scores = this.props.houses.map(house => {
            let score = house.props.score;

            return(
                <div key={'sb'+house.props.id}>
                    <div>{house.props.name}</div>
                    <div>{score}</div>
                    <div>{house.props.mascot}s</div>
                </div>
            )
        })
        return(
            <div>{scores}</div>
        )
    }
}

export default Scoreboard