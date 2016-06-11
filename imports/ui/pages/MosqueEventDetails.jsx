import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import {Events} from '../../api/events.js'

import Participants from '../MosqueEventDetails/Participants.jsx'
import Volunteers from '../MosqueEventDetails/Volunteers.jsx'


export default class MosqueEventDetails extends TrackerReact(React.Component){
	constructor(){
		super();

		this.state={
			subscription: {
				events: Meteor.subscribe("allEvents")
			}
		}
	}


	componentDidMount(){
	    document.title = "GoMosque 2.0 | EventDetails"
	}




	event(){
		return Events.findOne(this.props.eventId)
	}

	removeEvent(){
		Meteor.call('removeEvent', this.props.eventId)
			FlowRouter.go('/mosqueDashboard');
	}

  render(){
  	event = this.event()

   	if(!event)
  		return <span>loading</span>

  	needParticipants = event.needParticipants ? <span className="lessEmphasis"><i className="material-icons iconAlign">perm_identity</i> <span> Participants Needed </span> </span>: <span></span>
  	needVolunteers = event.needVolunteers ? <span className="lessEmphasis"><i className="material-icons iconAlign">assignment_ind</i> <span> Volunteers Needed </span>  </span>: <span></span>

  	gender = (event.gender == "f") ? <span className="lessEmphasis female"><i className="material-icons iconAlign">person</i> <span className=""> Female Only</span> </span>: (event.gender == "m") ? <span className="lessEmphasis male"><i className="material-icons iconAlign">person</i> <span className=""> Male Only </span> </span>: <span className="lessEmphasis"><i className="material-icons iconAlign">person</i> <span className=""> Any Genders </span> </span>

	pLength = (isNaN(event.numberParticipants)) ? <span> </span> : <span > / {event.numberParticipants} </span>

numberParticipants = (!event.participants) ? <span> 0 </span> : <span >{event.participants.length}</span>



    return(
    	<div>
	      <h1>{event.name}</h1>
	      <p>{event.thedate}</p>
	      <p>{needParticipants} | {needVolunteers} | {gender}</p>
				<p>{numberParticipants}{pLength}</p>
	      <p>{event.description}</p>

	      <button className="btn" onClick={this.removeEvent.bind(this)}>Delete</button>
          <a href={`/MosqueEventUpdate/${event._id}`} className="green-text text-lighten-2">Update Event</a>

				<Participants participants={event.participants} eventName={event.name} />
				<Volunteers volunteers={event.volunteers} eventName={event.name}/>

      	</div>
    )
  }
}
