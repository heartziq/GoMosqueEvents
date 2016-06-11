import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import {Events} from '../../api/events.js'

import EventAll from '../EventsView/EventAll.jsx'

export default class EventsView extends TrackerReact(React.Component){

  componentDidMount(){
    document.title = "GoMosque 2.0 | Events"
  }
  	constructor(){
		super();

		this.state={
			subscription: {
				events: Meteor.subscribe("allEvents")
			}
		}
	}

	events(){
		events = Events.find().fetch();
		//console.log("e " + events )
		return events
	}


  render(){
  	console.log(Meteor.userId())
  	events = this.events()

  	if(!events)
  		return <span> loading </span>

  	//console.log("events: " + events)

    return(
    	<div>
      		<h1>Events hahaha</h1>
      		<EventAll events={events}/>
      	</div>
    )
  }
}
