import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import {Events} from '../../api/events.js'

import MosqueEventsAll from '../MosqueDashboard/MosqueEventsAll.jsx'

export default class MosqueDashboard extends TrackerReact(React.Component){

  componentDidMount(){
    document.title = "GoMosque 2.0 | MosqueDashboard"
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
		events = Events.find({mosqueName: "Ghufran"}).fetch();
		console.log("e " + events )
		return events
	}


  render(){
  	console.log(Meteor.userId())
  	events = this.events()

  	if(!events)
  		return <span> loading </span>

  	console.log("events: " + events)

    return(
    	<div>
      		<h1>MosqueDashboard</h1>
      		<MosqueEventsAll events={events}/>
      	</div>
    )
  }
}
