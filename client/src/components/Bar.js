import React, { Component } from 'react';
import Button from '../components/Button'
class Bar extends Component {

    render(){
        return (
            <div className="Bar">
                <Button 
                    onClick={this.props.onClick}
                    text={this.props.buttonText} />
            </div>
        );
    }
}
export default Bar;
