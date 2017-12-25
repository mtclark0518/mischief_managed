import React, { Component } from 'react';
import axios from 'axios'
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
            exploring: false,
            houses: []            
        }
        this.search = this.search.bind(this)
        this.explore = this.explore.bind(this)
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        axios({
            method: "GET",
            url: "api/houses"
        })
        .then( response => {
            this.setState({ 
            houses: response.data
            })
        });
    }

    render() {
        return (
            <div className="CastleDash">
                    {this.state.searching !== true && this.state.exploring !== true &&(
                        <div>
                            <Hallows />
                            <Footer onHome={this.home} onExplore={this.explore} onSearch={this.search} />
                        </div>

                    )}
                    {this.state.exploring === true && (
                        <div>
                            <HouseDash syncScoreboard={this.syncScoreboard} houses={this.state.houses}/>
                            <Footer onHome={this.home} onExplore={this.explore} onSearch={this.search} />
                        </div>

                    )}
                    {this.state.searching === true && (
                        <div>
                            <LocationDash syncScoreboard={this.syncScoreboard}/>
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
    syncScoreboard = () => {
        this.getData()
    }
}
export default CastleDash;
