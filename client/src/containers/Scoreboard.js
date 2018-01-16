import React, {Component} from 'react'
    

class Scoreboard extends Component {
    render(){
        const scores = this.props.houses.map(house => {
            let styles = {

            }
            let colorNormal = {
                color: house.props.colors.primary,
                background: house.props.colors.secondary,

            }
            let colorInverse = {
                color: house.props.colors.secondary,
                background: house.props.colors.primary,
                border: '2px solid ' + house.props.colors.secondary,
                boxShadow: '0 0 5px 2px ' + house.props.colors.secondary 
            }
            let score = house.props.score;
            console.log(house.props)
            let giveFocus = e => {
                e.preventDefault()
                this.props.focus(house.props.id)
            }
            return(
                <div key={'sb'+house.props.id} className="sbOutWrap" style={colorInverse} onClick={e => giveFocus(e)}>
                    <div className="sbSection">
                        <div className="sbHouse">{house.props.name}</div>
                    </div>
                    <div className="sbSection">
                        <div className="sbScore" style={colorNormal}>{score}</div>
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