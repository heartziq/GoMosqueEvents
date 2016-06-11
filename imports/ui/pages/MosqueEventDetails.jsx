import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import {Events} from '../../api/events.js'

export default class MosqueEventDetails extends TrackerReact(React.Component){
	componentDidMount(){
	    document.title = "GoMosque 2.0 | EventDetails"
	}

  	constructor(){
		super();

		this.state={
			subscription: {
				events: Meteor.subscribe("allEvents")
			}
		}
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

  	


    return(
    	<div>
	      <h1>{event.name}</h1>
	      <p>{event.thedate}</p>
	      <p>{needParticipants} | {needVolunteers} | {gender}</p> 

	      <p>{event.description}</p>

	      <button className="btn" onClick={this.removeEvent.bind(this)}>Delete</button>
	      <button className="btn">Update</button>

      	</div>
    )
  }
}
