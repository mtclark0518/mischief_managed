import React, { Component } from 'react';
import Button from '../components/Button'
class Header extends Component {

    render(){
        return (
            <div className="Header">
                <Button 
                    onClick={this.props.onClick}
                    text={"mischief managed"} />
                <div>{this.props.hogwarts}</div>
            </div>
        );
    }
}
export default Header;
