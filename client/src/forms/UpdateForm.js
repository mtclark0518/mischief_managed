import React, { Component } from 'react';


class UpdateForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 'Where to boss?'
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
        let update = this.props.update;
        this.props.sendUpdate(update, amount)
        this.props.closeForm()
    }
    render(){
        let choices = this.props.choices.students.map(choice=>{
            console.log(choice)
            return(
                <option key={choice.id} value={choice}>{choice.firstName + ' ' + choice.lastName}</option>
            )
        })
        console.log(choices)
        return(
            <form onSubmit={ e => this.handleSubmit(e)} method={"PUT"}>
                <select value={this.state.value} onChange={e => this.handleChange(e)}>
                    {choices}
                </select> 
                <input type="submit"  value={'amount'}/>
            </form>
        )
    }
}
export default UpdateForm
