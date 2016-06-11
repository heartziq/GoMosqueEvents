import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import {Events} from '../../api/events.js'

export default class EventDetails extends TrackerReact(React.Component){
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

  handleParticipate(){
    event = this.event()

    console.log(event._id)

    Meteor.call('participateUser', event._id, function(){
      console.log("SUCCESSS")
    })

  }

  handleVolunteer(){
		event = this.event()

		console.log(event._id)

		Meteor.call('volunteerUser', event._id, function(){
			console.log("SUCCESSS")
		})


  }

  render(){
  	event = this.event()

   	if(!event)
  		return <span>loading</span>

  	needParticipants = event.needParticipants ? <button className="btn" onClick={this.handleParticipate.bind(this)}>Participate...jek?</button> : <span></span>
    needVolunteers = event.needVolunteers ? <button className="btn" onClick={this.handleVolunteer.bind(this)}>Volunteer!</button>: <span></span>

    return(
    	<div>
	      <h1>{event.name}</h1>
	      <p>{event.thedate}</p>
	      <p>{event.description}</p>
        <p>{needParticipants}</p>
        <p>{needVolunteers}</p>
      </div>
    )
  }
}
