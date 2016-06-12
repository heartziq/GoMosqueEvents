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
      filter: "volunteer"
    }
  }
  componentDidMount(){
    document.title = "Quick Plate | Dashboard"
  }

  handleFilter(e) {
      e.preventDefault()

      this.setState({filter: e.target.elements.filterBy.value});
  }
  events() {
    //events = Events.find({$or: [{participants: userEmail},{volunteers: userEmail}]}).fetch()

      var filterState = this.state.filter;

      var userEmail = Meteor.user().emails[0].address;

      if (filterState === "history")
          events = Events.find({$and: [{$or: [{participants: userEmail},{volunteers: userEmail}]}, {hasExpired: true}]}).fetch()
      else if (filterState === "participant")
          events = Events.find({participants: userEmail, hasExpired: { $ne: true }}).fetch()
      else if (filterState === "volunteer")
          events = Events.find({volunteers: userEmail, hasExpired: { $ne: true }}).fetch()

      return events
  }
  getMyEvents(){
    //return an array of events that I participated/volunteered
    //$or: [{email: 'some@mail.com'},{city: 'atlanta'}]
  return  Events.find({$or: [{participants: Meteor.user().emails[0].address},{volunteers: Meteor.user().emails[0].address}]}).fetch()

  }
  getMyEventsVolunteered(){
    return  Events.find({volunteers: Meteor.user().emails[0].address}).fetch()
  }
  render(){
    myEvents = this.events();

    if (!myEvents)
      return (<p>Loading...</p>)

    return(
      <div className="row">
        <form onSubmit={this.handleFilter.bind(this)}>

            <div className="row">
                <p>
                    <input name="filterBy" type="radio" id="participant" value="participant" ref="filterBy"/>
                    <label htmlFor="participant">Participating</label>
                    <input name="filterBy" type="radio" id="volunteer" value="volunteer" ref="filterBy" defaultChecked/>
                    <label htmlFor="volunteer">Volunteering</label>
                    <input name="filterBy" type="radio" id="history" value="history" ref="filterBy"/>
                    <label htmlFor="history">History</label>
                    <button type="submit" className="btn">Filter</button>
                </p>
            </div>

        </form>
        {myEvents.map((singleEvent)=>{

          return <SingleEvent singleEvent={singleEvent} key={singleEvent._id}/>

        } )}
      </div>

    )
  }
}
