import React, { Component } from 'react';


class UpdateForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 'Who we gettin?'
        }
    }
    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })

    }
    handleSubmit = e => {
        e.preventDefault();
        let amount = parseInt(this.state.value)
        console.log(amount)
        console.log(this.props.update.id)
        // let update = this.props.update;
        this.props.interaction(this.props.update.id, amount)
        this.props.closeForm()
    }
    render(){
        let choices = this.props.choices
            .filter(choice => choice.id !== this.props.update)
            .map( choice => {
                return( <option key={choice.id} value={choice.id}>{choice.firstName + ' ' + choice.lastName}</option> )
        })
        return(
            <form onSubmit={ e => this.handleSubmit(e)} method={"PUT"}>
                <select value={this.state.value} onChange={e => this.handleChange(e)}>
                    {choices}
                </select> 
                <input type="submit"  value={'send hex'}/>
            </form>
        )
    }
}
export default UpdateForm
