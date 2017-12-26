import React, { Component } from 'react';
import Label from '../components/Label'


class UpdateForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event){
        console.log('fuck off')
        console.log(event.target.value)
        this.setState({
            value: event.target.value
        })

    }

    handleSubmit(e){
        e.preventDefault();
        console.log('fart in your jeans')
        console.log(this.state.value)

    }
    

    render(){


        return(
            <form onSubmit={ e => this.handleSubmit(e)} method={"PUT"}>
                <Label title={'Update Location'} onClick={this.props.close} />
                <input type='number' value={this.state.value} onChange={this.handleChange}/>
                <input type="submit"  value={'Move'}/>
            </form>
        )
    }




}
export default UpdateForm
