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

	{/* Check if event got PARTICIPANT LIMIT  (x/y) x out of total possible y */}
    pLength = (isNaN(event.numberParticipants)) ? <span> </span> : <span > / {event.numberParticipants} </span>

	{/* if NO participants, show 0 */}
		numberParticipants = (!event.participants) ? <span> 0 </span> : <span >{event.participants.length}</span>
  	participantCard = <span></span>

		{/* if needParticipants TRUE but NO participants (so far) */}
		showParticipants = (event.participants) ? <span><Participants participants={event.participants} eventName={event.name} /></span> : <span>There are no participants currently</span>

	{/* if needVolunteers TRUE but NO participants (so far) */}
		numberVolunteers = (!event.volunteers) ? <span> 0 </span> : <span >{event.volunteers.length}</span>
		showVolunteers = (event.volunteers) ? <span><Volunteers volunteers={event.volunteers} eventName={event.name}/></span> : <span>There are no volunteers currently</span>


  	if(event.needParticipants){
  		participantCard = (


  			<div className="row">
      			<div className="col s12">
        			<div className="card-panel hoverable">
								<p>Number of Participants: {numberParticipants}</p>
        				<h3> Participants</h3>

						    {showParticipants}
        			</div>
      			</div>
   			 </div>

  		)
  	}

  	volunteerCard = <span></span>

  	if(event.needVolunteers){
  		volunteerCard = (

  			<div className="row">
<<<<<<< HEAD
      			<div className="col s12 hoverable">
        			<div className="card-panel ">
								<p>Number of Volunteers: {numberVolunteers}</p>
=======
      			<div className="col s12 ">
        			<div className="card-panel hoverable">
>>>>>>> 56f6a9091e69a17d438d0f6be40f072408036594
        				<h3> Volunteers</h3>
                 {showVolunteers}
              </div>
      			</div>
   			 </div>

  		)
  	}





    return(
    	<div className="topGap">
    		<div className="row">
      			<div className="col s12">
        			<div className="card-panel hoverable">
        				<h2>{event.name}</h2>
        				<p>{event.thedate}</p>
				        <p>{needParticipants} &nbsp; {needVolunteers} &nbsp; {gender}</p>
				        <p>{event.description}</p>
				        <div className="right-align">
				        	<a href={`/MosqueEventUpdate/${event._id}`} className="btn green darken-2">Update</a>
	          				<span className="marginSides"></span>
	        				<button className="btn red darken-2" onClick={this.removeEvent.bind(this)}>Delete</button>
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
