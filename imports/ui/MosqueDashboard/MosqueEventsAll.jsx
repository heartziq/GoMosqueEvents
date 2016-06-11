import React from 'react';
import MosqueEventSingle from './MosqueEventSingle.jsx'

export default class MosqueEventsAll extends React.Component{

  componentDidMount(){
    document.title = "GoMosque 2.0 | MosqueDashboard"
  }


  render(){
  	events = this.props.events
    if(!events)
      return <span> loading </span>

    return(
    	<div>
      Mosqevents all
          <ul>
            {events.map((event)=>{
              return <MosqueEventSingle key={event._id} event={event} /> 
            } )}

          </ul>
      </div>
    )
  }
}
