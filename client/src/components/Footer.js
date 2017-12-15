import React, { Component } from 'react';
import Button from './Button'
import '../styles/index.css'
class Footer extends Component {

    render(){
        console.log(this.props)
        return (
            <footer className="Footer">
                <Button text={'home'} onClick={this.props.onHome}/>
                <Button text={'houses'} onClick={this.props.onExplore}/>
                <Button text={'search'} onClick={this.props.onSearch}/>
            </footer>
        );
    }
}
export default Footer;
