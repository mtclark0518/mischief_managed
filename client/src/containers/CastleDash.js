import React, { Component } from 'react';
import Hallows from '../components/Hallows'
import HouseDash from './HouseDash'
import LocationDash from './LocationDash'
import Footer from '../components/Footer'


class CastleDash extends Component {
    constructor(props){
        super(props)
        this.state = {
            searching: false,
            exploring: false,
        }
        this.search = this.search.bind(this)
        this.explore = this.explore.bind(this)
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


    // getData(){
    //     axios({
    //         method: "GET",
    //         url: "api/houses"
    //     })
    //     .then( response => {
    //         this.setState({ 
    //         houses: response.data
    //         })
    //     })
    //     .then( () => {
    //         axios({
    //             method: "GET",
    //             url: "api/locations"
    //         })
    //         .then(response => {
    //             this.setState({
    //                 locations: response.data
    //             })
    //         })
    //     });
    // }

    render() {
        return (
            <div className="CastleDash">
                {!this.state.searching && !this.state.exploring &&(
                    <Hallows />
                )}
                {this.state.exploring && (
                    <HouseDash />
                )}
                {this.state.searching && (
                    <LocationDash />
                )}
                <Footer onHome={this.home} onExplore={this.explore} onSearch={this.search} />
            </div>
        )
    }
    // componentDidMount(){
    //     this.getData()
    //     this.socket.on('update location', data => {
    //         this.getData()
    //     })

    // }




    // syncScoreboard = () => {
    //     this.getData()
    // }
    // hex = id => {
    //     this.socket.emit('hex', id)
    // }
    // honor = id => {
    //     this.socket.emit('honor', id)
    // }
    // moveStudent = (id, location) => {
    //     this.socket.emit('move', {
    //         student: id,
    //         location: location
    //     })
    // }
}
export default CastleDash;
