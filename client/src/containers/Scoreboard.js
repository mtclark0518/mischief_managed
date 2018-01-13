import React, {Component} from 'react'
    

class Scoreboard extends Component {
    render(){
        const scores = this.props.houses.map(house => {
            let score = house.props.score;
            console.log(house.props)
            return(
                <div key={'sb'+house.props.id} className="sbOutWrap">
                    <div className="sbSection">
                        <div className="sbHouse">{house.props.name}</div>
                    </div>
                    <div className="sbSection">
                        <div className="sbScore">{score}</div>
                    </div>
                    <div className="sbSection">
                        <div className="sbTeam">{house.props.mascot}s</div>
                    </div>
                </div>
            )
        })
        return(
            <div className="scoreboard">{scores}</div>
        )
    }
}

export default Scoreboard