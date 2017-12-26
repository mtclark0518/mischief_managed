import React, { Component } from 'react';
import Socket from '../containers/Socket'
import Label from '../components/Label'


class UpdateForm extends Component {
    constructor(props){
        super(props)


    }


    

    render(){



        return(
            <form onSubmit={ e => this.submit(e)} method={"PUT"}>
                <Label title={'Update Location'} onClick={this.props.close}/>
                <input type='number'/>
                <button>submit</button>
            </form>
        )}




}
export default UpdateForm
