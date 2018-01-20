import React, { Component } from 'react';
import Location from './Location'
import FooterNav from '../components/FooterNav'


class LocationDash extends Component {
  constructor(props){
    super(props)
    this.state = {
      focus: null,
      type: null
    }
  }

  focus = place => {
    let myPlace = this.props.locations.filter(location => location.id === place)
    this.setState({focus:myPlace[0]})

  }
  type = category => {
    this.setState({focus: null, type: category})
  }
  clearFocus = () => {
    this.setState({focus: null})
  }
  resetDash = () => {
    this.setState({focus: null, type: null})
  }
  
  render() {

    const format = location => {
      let value = ''                   
      if(location.type === 'Classroom'){
        value = location.Subject.name + ' ' + location.type
      } else if (location.type === 'Common Area'){
        value = location.name
      } else if (location.type === 'Restricted'){
        location.name === 'Common Room' ? value = location.House.name + ' ' + location.name : value = location.name
      }
      return value
    }


    const classrooms = this.props.locations.map( location => {
      if(location.type === 'Classroom'){
        const staff = this.props.staff.filter(staff => staff.LocationId === location.id)
        const roster = this.props.students.filter(student => student.LocationId === location.id)
        const name = format(location)
        return(
          <Location key={'loc' + location.id} castleView={this.props.castleView} type={location.type} id={location.id} name={name} staff={staff} students={roster} house={location.House} subject={location.Subject} focus={this.focus} infocus={this.state.focus} clear={this.clearFocus} sendUpdate={this.props.sendUpdate}/>
        )
      }
    })
    const restricted = this.props.locations.map( location => {
      if(location.type === 'Restricted' && location.name !== 'Common Room'){
        const staff = this.props.staff.filter(staff => staff.LocationId === location.id)
        const roster = this.props.students.filter(student => student.LocationId === location.id)
        const name = format(location)
        return(
          <Location key={'loc' + location.id} castleView={this.props.castleView} type={location.type} id={location.id} name={name} staff={staff} students={roster} house={location.House} subject={location.Subject} focus={this.focus} infocus={this.state.focus} clear={this.clearFocus} sendUpdate={this.props.sendUpdate}/>
        )
      }
    })
    const common = this.props.locations.map( location => {
      if(location.type === 'Restricted' && location.name === 'Common Room'){
        const staff = this.props.staff.filter(staff => staff.LocationId === location.id)
        const roster = this.props.students.filter(student => student.LocationId === location.id)
        const name = format(location)
          return(
            <Location key={'loc' + location.id} castleView={this.props.castleView} type={location.type} id={location.id} name={name} staff={staff} students={roster} house={location.House} subject={location.Subject} focus={this.focus} infocus={this.state.focus} clear={this.clearFocus} sendUpdate={this.props.sendUpdate}/>
          )
      }
    })
    const publicSpace = this.props.locations.map( location => {
      if(location.type === 'Common Area'){
        const staff = this.props.staff.filter(staff => staff.LocationId === location.id)
        const roster = this.props.students.filter(student => student.LocationId === location.id)
        const name = format(location)
          return(
            <Location key={'loc' + location.id} castleView={this.props.castleView} type={location.type} id={location.id} name={name} staff={staff} students={roster} house={location.House} subject={location.Subject} focus={this.focus} infocus={this.state.focus} clear={this.clearFocus} sendUpdate={this.props.sendUpdate}/>
          )
      }
    })
    const types = {
      classrooms: classrooms,
      common: common,
      restricted: restricted,
      publicSpace: publicSpace
    }
    return(
      <div className="Dash">

          <div className="dashItem">
            {this.state.type === 'classrooms' && (
              <div>{ classrooms }</div>
            )}
            {this.state.type === 'restricted' && (
              <div>{ restricted }</div>
            )}
            {this.state.type === 'common' && (
              <div>{ common }</div>
            )}
            {this.state.type === 'publicSpace' && (
              <div>{ publicSpace }</div>
            )}
          </div>

        <div className="secondaryNav">
          <button className='secondaryItem classroom' onClick={e => this.type('classrooms')}>Classrooms</button>
          <button className='secondaryItem commonroom' onClick={e => this.type('common')}>Common Rooms</button>
          <button className='secondaryItem restricted' onClick={e => this.type('restricted')}>Restricted</button>
          <button className='secondaryItem publicspace' onClick={e => this.type('publicSpace')}>Public Spaces</button>
        </div>
        {this.props.castleView === 'location' &&(
          <FooterNav home={e=>this.props.changeView('home')} house={e => this.props.changeView('house')} location={this.resetDash} />
        )}
      </div>
    )
  }
}
export default LocationDash;

