import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import {Events} from '../../api/events.js'

import EventAll from '../EventsView/EventAll.jsx'

export default class EventsView extends TrackerReact(React.Component) {

    componentDidMount() {
        document.title = "GoMosque 2.0 | Events"
    }
    constructor() {
        super();

        this.state = {
            subscription: {
                events: Meteor.subscribe("allEvents")
            },
            filter: "all"
        }
    }

    handleFilter(e) {
        e.preventDefault()

        this.setState({filter: e.target.elements.filterBy.value});
    }

    events() {
        var filterState = this.state.filter;
        console.log(filterState)
        if (filterState === "all") 
            events = Events.find().fetch()
        else if (filterState === "participant") 
            events = Events.find({
                needParticipants: true,
                needVolunteers: {
                    $ne: true
                }
            }).fetch()
        else 
            events = Events.find({
                needVolunteers: true,
                needParticipants: {
                    $ne: true
                }
            }).fetch()

            //console.log("e " + events )
        return events
    }

    render() {
        console.log(Meteor.userId())
        events = this.events()

        if (!events) 
            return <span>
                loading
            </span>

            //console.log("events: " + events)
        
        return (
            <div className="bottomGap">
                <form onSubmit={this.handleFilter.bind(this)}>

                    <div className="row">
                        <p>
                            <input name="filterBy" type="radio" id="participant" value="participant" ref="filterBy"/>
                            <label htmlFor="participant">Participant</label>
                            <input name="filterBy" type="radio" id="volunteer" value="volunteer" ref="filterBy"/>
                            <label htmlFor="volunteer">Volunteer</label>
                            <input name="filterBy" type="radio" id="all" value="all" ref="filterBy" defaultChecked/>
                            <label htmlFor="all">All</label>
                            <button type="submit" className="btn">Filter</button>
                        </p>
                    </div>

                </form>

                <h1>Events</h1>
                <EventAll events={events}/>
            </div>
        )
    }
}
