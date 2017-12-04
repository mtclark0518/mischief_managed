import React, { Component } from 'react';
import axios from 'axios'
import House from '../components/House'

class HouseDash extends Component {
    constructor(props){
        super(props)
        this.state= {
            houses: []
        }
    }
    ComponentDidMount(){
        this.getData()
    }
    
    getData = () => {
        axios({}).then(houses=>{this.setState({houses: houses.data.houses})})
    }
    render() {
        let houses = this.state.houses.map( house => {
            console.log(house)
            return(
                <House
                    key={house.id}
                    house={house} />
            )
        })
        return (
            <div className="HouseDash">
                {houses}
            </div>
        );
    
    }
}  
export default HouseDash

