import React, { Component } from 'react';
import Hallows from '../components/Hallows'
import HouseDash from './HouseDash'
import LocationDash from './LocationDash'
import Footer from '../components/Footer'
import '../styles/index.css'


class CastleDash extends Component {
    constructor(props){
        super(props)
        this.state = {
            searching: false,
            exploring: false            
        }
        this.search = this.search.bind(this)
        this.explore = this.explore.bind(this)
    }
    

    render() {
        return (
            <div className="CastleDash">
                    {this.state.searching !== true && this.state.exploring !== true &&(
                            <Hallows />
                    )}
                    {this.state.exploring === true && (
                            <HouseDash />
                    )}
                    {this.state.searching === true && (
                            <LocationDash />
                    )}
                <Footer onHome={this.home} onExplore={this.explore} onSearch={this.search} />
            </div>
        )
    }

    search = () => {
        this.setState({
            searching : true,
            exploring: false
        })
    }
    explore = () => {
        this.setState({
            searching : false,
            exploring: true
        })
    }
    home = () => {
        this.setState({
            exploring: false,
            searching: false
        })
    }

    
}
export default CastleDash;
