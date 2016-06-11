import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import {Events} from '../../api/events.js'
import SingleEvent from '../Dashboard/SingleEvent.jsx'

export default class Dashboard extends TrackerReact(Component){

  constructor(){
    super();

    this.state={
      subscription: {
        events: Meteor.subscribe("allEvents")
      },
    }
  }
  componentDidMount(){
    document.title = "Quick Plate | Dashboard"
  }

  getMyEvents(){
    //return an array of events that I participated/volunteered
    console.log(Meteor.user().emails[0].address)
  return  Events.find({participants: Meteor.user().emails[0].address}).fetch()

  }
  render(){
    myEvents = this.getMyEvents();

    if (!myEvents)
      return (<p>Loading...</p>)

    console.log(myEvents)
    return(
      <div>
        <h1>Events Participated/Volunteered by ME</h1>
          {myEvents.map((singleEvent)=>{
            return <SingleEvent singleEvent={singleEvent} key={singleEvent._id}/>
          } )}

      </div>

    )
  }
}
