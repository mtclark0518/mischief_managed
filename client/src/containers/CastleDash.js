import React, { Component } from 'react';
import Landing from '../components/Landing'
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
                <div className="container">
                    {this.state.searching !== true && this.state.exploring !== true &&(
                        <div>
                            <Landing />
                            <Footer onHome={this.home} onExplore={this.explore} onSearch={this.search} />
                        </div>
                    )}
                    {this.state.exploring === true && (
                        
                        <div>
                            <HouseDash />
                            <Footer onHome={this.home} onExplore={this.explore} onSearch={this.search} />
                        </div>
                    )}
                    {this.state.searching === true && (
                        
                        
                        <div className="">
                            <LocationDash />
                            <Footer onHome={this.home} onExplore={this.explore} onSearch={this.search} />
                        </div>
                    )}
                </div>
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
