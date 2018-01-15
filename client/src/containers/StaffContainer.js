import React, { Component } from 'react';
import Staff from './Staff'
class StaffContainer extends Component {

    render(){
        const staff = this.props.staff.map( staff => {
            console.log(staff)
            return(
                <Staff
                    key={'sta' + staff.id} 
                    name={staff.firstName}
                    family={staff.lastName}
                    position={staff.position}
                    house={staff.House}
                    location={staff.Location}
                    subject={staff.Subject}
                    />
            )
        })    
        return(
            <div>{staff}</div>
        )
    }  
}
export default StaffContainer;