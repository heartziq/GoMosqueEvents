import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import {Events} from '../../api/events.js'

import Participants from '../MosqueEventDetails/Participants.jsx'

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

  	participantCard = <span></span>
  	
  	if(event.needParticipants){
  		participantCard = (

  			<div className="row">
      			<div className="col s12">
        			<div className="card-panel">
        				<h1> Participants</h1>
						<Participants participants={event.participants} eventName={event.name} />
        			</div>
      			</div>
   			 </div>	 

  		)
  	}

  	volunteerCard = <span></span>

  	if(event.needVolunteers){
  		volunteerCard = (

  			<div className="row">
      			<div className="col s12">
        			<div className="card-panel">
        				<h1> Volunteers</h1>
						<Participants participants={event.participants} eventName={event.name} />
        			</div>
      			</div>
   			 </div>	 

  		)
  	}



    return(
    	<div className="topGap">
    		<div className="row">
      			<div className="col s12">
        			<div className="card-panel">
        				<h2>{event.name}</h2>
        				<p>{event.thedate}</p>
				        <p>{needParticipants} | {needVolunteers} | {gender}</p>
				        <p>{event.description}</p>
				        <div className="right-align">
				        	<a href={`/MosqueEventUpdate/${event._id}`} className="btn">Update</a>
	          				<span className="marginSides"></span>
	        				<button className="btn red" onClick={this.removeEvent.bind(this)}>Delete</button>
        				</div>
        			</div>
      			</div>
   			 </div>	  

	     	{participantCard}
	     	{volunteerCard}

      	</div>
    )
  }
}
