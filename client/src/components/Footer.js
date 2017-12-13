import React, { Component } from 'react';
import Button from './Button'
import '../styles/footer.css'
class Footer extends Component {

    render(){
        console.log(this.props)
        return (
            <footer className="Footer">
                <Button onClick={this.props.onClose}/>
                <Button onClick={this.props.onExplore}/>
                <Button onClick={this.props.onSearch}/>
            </footer>
        );
    }
}
export default Footer;
