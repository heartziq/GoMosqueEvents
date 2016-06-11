import React from 'react';

export default class EventSingle extends React.Component{

  componentDidMount(){
    document.title = "GoMosque 2.0 | Events"
  }

  render(){
  	event = this.props.event

    //console.log(event)

    return(
      <div className="col s12 m6">
        <div className="card">
          <div className="card-content black-text">
            <span className="card-title">{event.name}</span>
            <p>{event.description}</p>
            <p>{event.theDate}</p>
            <p>{event.start}</p>
            <p>{event.end}</p>
          </div>
          <div className="card-action">
            <a href={`/eventDetails/${event._id}`}>View Details</a>

          </div>
        </div>
    </div>
    )
  }
}
