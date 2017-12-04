import React, { Component } from 'react';
import Panel from '../components/Panel'
import HouseDash from './HouseDash'
class CastleDash extends Component {
    constructor(props){
        super(props)
        this.state = {
            houses: false,
            staff: false,
            location: false            
        }
    }

    render(){
        return (
            <div className="CastleDash">
                {
                    this.state.houses !== true && 
                    this.state.staff !== true &&
                    this.state.location !== true && (
                        <div>
                            all false
                            <Panel value={'houses'} onClick={ e => this.toggle(e)} />
                            <Panel value={'location'} onClick={ e => this.toggle(e)} />
                            <Panel value={'staff'} onClick={ e => this.toggle(e)} />
                            <Panel value={'location'} onClick={ e => this.toggle(e)} />
                            <Panel value={'location'} onClick={ e => this.toggle(e)} />
                        </div>
                    )
                }
                {this.state.houses === true && (
                    <HouseDash />
                )}
            </div>
        )
    }
}
export default CastleDash;
