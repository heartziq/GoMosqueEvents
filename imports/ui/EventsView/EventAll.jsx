import React from 'react';
import EventSingle from './EventSingle.jsx';

export default class EventAll extends React.Component{

  componentDidMount(){
    document.title = "GoMosque 2.0 | Events"
  }

  render(){
  	events = this.props.events
    if(!events)
      return <span> loading </span>

    return(
    	<div className="row">
          {events.map((event)=>{
            return <EventSingle key={event._id} event={event} />
          } )}

      </div>
    )
  }
}
