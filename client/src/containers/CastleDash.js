import React, { Component } from 'react';
import HouseDash from './HouseDash'
import LocationDash from './LocationDash'
import Panel from '../components/Panel'
import Button from '../components/Button'

class CastleDash extends Component {
    constructor(props){
        super(props)
        this.state = {
            searching: false            
        }
        this.search = this.search.bind(this)

    }

    render() {
        return (
            <div className="CastleDash">

                    {this.state.searching !== true &&(
                        <div>
                            <HouseDash />
                            <Panel data={"search"} onClick={this.search} />
                        </div>
                    )}
                    {
                    this.state.searching === true && (
                        <div>
                            <Button text={'back'} onClick={this.search}/>
                            <LocationDash />
                        </div>
                    )}
            </div>
        )
    }

    search = () => {
        this.setState(prevState => ({
            searching : !prevState.searching
        }))
    }
}
export default CastleDash;
