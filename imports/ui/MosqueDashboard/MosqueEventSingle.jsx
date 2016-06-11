import React from 'react';

export default class MosqueEventSingle extends React.Component{

  componentDidMount(){
    document.title = "GoMosque 2.0 | MosqueDashboard"
  }


  render(){
  	event = this.props.event

    needParticipants = event.needParticipants ? <span className="lessEmphasis"><i className="material-icons iconAlign">perm_identity</i> <span> Participants Needed </span> </span>: <span></span>
    needVolunteers = event.needVolunteers ? <span className="lessEmphasis"><i className="material-icons iconAlign">assignment_ind</i> <span> Volunteers Needed </span>  </span>: <span></span>

    console.log(event)

    return(
    	<div>
          <div className="col s12 m6 ">
            <div className="card ">
              <div className="card-content black-text eventsCard">
                <span className="card-title cTitleWidth truncate"><strong>{event.name}</strong></span>
                <p>{event.theDate} </p>
                <p>{event.start} - {event.end}</p>
                <br/>
                <p>{needParticipants}</p>
                <p>{needVolunteers}</p>
              </div>
              <div className="card-action">
                <a href={`/MosqueEventDetails/${event._id}`} className="green-text text-lighten-2">View Details</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
