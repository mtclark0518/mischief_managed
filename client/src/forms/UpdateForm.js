import React, { Component } from 'react';


class UpdateForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 'Where to boss?'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })

    }
    handleSubmit(e){
        e.preventDefault();
        let amount = parseInt(this.state.value)
        let update = this.props.update;
        this.props.sendUpdate(update, amount)
        this.props.closeForm()
    }
    render(){
        return(
            <form onSubmit={ e => this.handleSubmit(e)} method={"PUT"}>
                <input value={this.state.value} type='number' onChange={this.handleChange} /> 
                <input type="submit"  value={'amount'}/>
            </form>
        )
    }
}
export default UpdateForm
