import React, { Component } from 'react';
import Label from '../components/Label'


class UpdateForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 'Where to boss?'
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
        this.props.moveStudent(this.props.student, this.state.value)
        this.props.clear()
    }
    

    render(){
        const locations = this.props.locations.map( location => {
            console.log(location)
            let name = location.name 
            let value = location.id
            return(
                <option key={location.id} value={value}>{name}</option>
            )
        })

        return(
            <form onSubmit={ e => this.handleSubmit(e)} method={"PUT"}>
                <Label title={'Update Location'} onClick={this.props.close} />
                <select value={this.state.value} onChange={this.handleChange}> 
                    {locations}
                </select>
                <input type="submit"  value={'Move'}/>
            </form>
        )
    }




}
export default UpdateForm
