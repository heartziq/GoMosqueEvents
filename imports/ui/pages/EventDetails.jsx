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
      Materialize.toast('Participation RSVP Success!', 4000) 
    })

  }

  handleVolunteer(){
		event = this.event()

		console.log(event._id)

		Meteor.call('volunteerUser', event._id, function(){
			console.log("SUCCESSS")
            Materialize.toast('Volunteer RSVP Success!', 4000) 

		})


  }

  render(){
    event = this.event()

    if(!event)
      return <span>loading</span>

   needParticipants = event.needParticipants ? <button className="btn blue darken-2 fullButton" onClick={this.handleParticipate.bind(this)}><i className="material-icons left">perm_identity</i>Participate</button> : <span></span>
    needVolunteers = event.needVolunteers ? <button className="btn blue darken-2 fullButton" onClick={this.handleVolunteer.bind(this)}><i className="material-icons left">assignment_indi</i>Volunteer</button>: <span></span>

    gender = (event.gender == "f") ? <span className="lessEmphasis female"><i className="material-icons iconAlign">person</i> <span className=""> Female Only</span> </span>: (event.gender == "m") ? <span className="lessEmphasis male"><i className="material-icons iconAlign">person</i> <span className=""> Male Only </span> </span>: <span className="lessEmphasis"><i className="material-icons iconAlign">person</i> <span className=""> Any Genders </span> </span>


    return(
      <div className="topGap">
        <div className="row">
            <div className="col s12">
              <div className="card-panel hoverable">
                <h2>{event.name}</h2>
                <p>{event.theDate}, {event.start} - {event.end} </p> 
                <p>{event.mosqueName} Mosque</p>
                 <p>{gender}</p>
                 <p>{event.description}</p>

                <p className="topGap">{needParticipants}</p>
                <p>{needVolunteers}</p> 

              </div>
            </div>
         </div>


        </div>
    )
  }
}
