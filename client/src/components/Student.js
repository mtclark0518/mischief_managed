import React, {Component} from 'react'
import axios from 'axios'
import Panel from './Panel'
import Label from './Label'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: null,
            lastName: null,
            id: null,
            points: null,
            house: {}
        }
    }
    componentDidMount(){
        this.getData(this.props.student.id)
    }
    getData(id){
    axios({
      method: "GET",
      url: "api/students/" + id
    })
  .then( student => {
    this.setState({ 
        firstName: student.data.firstName,
        lastName: student.data.lastName,
        id: student.data.id,
        points: student.data.points,
        house: student.data.House
      });
    });
  }
    hex = e => {
        e.preventDefault();
        axios({
            method: "PUT",
            url: "api/students/hex/" + this.state.id
        }).then( student =>{
            this.setState({
                points: student.data.points
            });
            this.props.syncScoreboard();
        })

    }
    honor = e => {
        e.preventDefault();
        axios({
            method: "PUT",
            url: "api/students/honor/" + this.state.id
        }).then( student =>{
            this.setState({
                points: student.data.points
            });
            this.props.syncScoreboard();
        })

    }
    render(){
        let styles = {
            color: this.state.house.primaryColor,
            border: '1px solid ' + this.state.house.primaryColor,
            boxShadow: '0 0 2px 0px ' + this.state.house.secondaryColor,
        }
        let name = this.props.student.firstName + ' ' + this.props.student.lastName;
        
        return(
            
            <div style={styles} className="Student">

                {this.props.expanded && this.props.focused !== null && (
                    <div> 
                        <Label title={this.state.firstName + ' ' + this.state.lastName} onClick={this.props.close} />
                        <div>Points: {this.state.points}</div>
                        
                        {this.props.type === 'location' && (
                            <div>
                                <button onClick={e => this.hex(e)}>
                                    <svg className="hex" id="Capa_1" style={{"enableBackground":"new 0 0 360 360"}} version="1.1" viewBox="0 0 360 360" x="0px" y="0px" xmlSpace="preserve">
                                        <g id="XMLID_17_">
                                            <path id="XMLID_882_" d="M180,0C97.157,0,30,67.157,30,150v109.667h0.016c0.337,13.559,7.045,22.475,19.879,26.753L105,305v30&#xA;&#x9;&#x9;c0,13.75,11.25,25,25,25h100c13.75,0,25-11.25,25-25v-30l55.051-18.668c12.834-4.278,19.597-13.106,19.934-26.665H330V150&#xA;&#x9;&#x9;C330,67.157,262.843,0,180,0z M300,258.063l-54.635,18.526L225,283.495V305v25h-90v-25v-21.544l-20.415-6.884L60,258.168V150&#xA;&#x9;&#x9;c0-32.053,12.482-62.188,35.147-84.853C117.813,42.482,147.947,30,180,30s62.188,12.482,84.853,35.147&#xA;&#x9;&#x9;C287.518,87.813,300,117.947,300,150V258.063z"/>
                                            <path id="XMLID_885_" d="M160,281c0,11.046,8.954,20,20,20s20-8.954,20-20s-20-40-20-40S160,269.954,160,281z"/>
                                            <path id="XMLID_886_" d="M125,161c-24.854,0-45,20.146-45,45s20.146,45,45,45s45-20.146,45-45S149.854,161,125,161z M125,221&#xA;&#x9;&#x9;c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S133.271,221,125,221z"/>
                                            <path id="XMLID_889_" d="M190,206c0,24.854,20.146,45,45,45s45-20.146,45-45s-20.147-45-45-45S190,181.146,190,206z M250,206&#xA;&#x9;&#x9;c0,8.271-6.729,15-15,15s-15-6.729-15-15s6.729-15,15-15S250,197.729,250,206z"/>
                                        </g>
                         
                                    </svg>
                                </button>
                                <button onClick={e => this.honor(e)}>
                                    <svg className="heart" id="Capa_1" style={{"enableBackground":"new 0 0 490 490"}} version="1.1" viewBox="0 0 490 490" x="0px" y="0px" xmlSpace="preserve">
                                        <path d="M128.833,334.605c32.081,29.39,62.382,57.15,76.074,82.153L245.014,490l40.096-73.247&#xA;&#x9;c13.688-25.004,43.988-52.766,76.068-82.158c59.669-54.669,127.3-116.632,127.653-200.181c0.144-33.927-13.428-66.322-38.218-91.217&#xA;&#x9;C423.278,15.745,384.441,0,344.059,0c-38.281,0-73.14,13.846-99.055,36.422C219.087,13.846,184.224,0,145.939,0&#xA;&#x9;C66.112,0,1.168,60.211,1.168,134.221C1.518,217.967,69.157,279.933,128.833,334.605z M145.939,45.719&#xA;&#x9;c54.72,0,99.067,39.607,99.067,88.502c0-48.895,44.334-88.502,99.053-88.502c54.705,0,99.261,39.607,99.053,88.502&#xA;&#x9;C442.674,237.755,289.858,312.866,245.006,394.8C200.14,312.866,47.319,237.755,46.887,134.221&#xA;&#x9;C46.887,85.326,91.225,45.719,145.939,45.719z"/>
  
                                    </svg>
                                </button>
                            </div>

                        )}
                    </div>
                )}

                {this.props.focused === null && (
                    <Panel onClick={this.expandStudent} data={name} />
                )}
            </div>
        )
    }

    expandStudent = () => {
        this.props.focus(this.props.student)
    }

}
export default Student;


