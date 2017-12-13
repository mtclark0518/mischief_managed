import React, { Component } from 'react';
import HouseDash from './HouseDash'
import SearchContainer from './SearchContainer'
import LocationDash from './LocationDash'
import Panel from '../components/Panel'
import Button from '../components/Button'
import Footer from '../components/Footer'
import '../styles/castle.css'
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
                        <div className="container">
                            <Footer onHome={this.home} onExplore={this.explore} onSearch={this.search} />
                        </div>
                    )}
                    {this.state.exploring === true && (
                        <div className="container">
                            <HouseDash />
                            <Footer onHome={this.home} onExplore={this.explore} onSearch={this.search} />
                        </div>
                    )}
                    {this.state.searching === true && (
                        <div className="container">
                            <LocationDash />

                            <Footer onHome={this.home} onExplore={this.explore} onSearch={this.search} />
                        </div>
                    )}
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
