import React, { Component } from 'react';
import House from './House'

class HouseDash extends Component {

    render() {
        let houses = this.props.houses.map( house => {
            console.log(house)
            return(
                <House
                    key={house.id}
                    house={house} />
            )
        })
        return (
            <div className="Location">
                {houses}
            </div>
        );
    
    }
}  
export default HouseDash

