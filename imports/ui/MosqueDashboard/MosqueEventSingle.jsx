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
          <div className="col s12 m4 ">
            <div className="card eventsCard">
              <div className="card-content black-text">
                <span className="card-title">{event.name}</span>
                <p>{event.theDate}</p>
                <br/>
                <p>{needParticipants}</p>
                <p>{needVolunteers}</p>

              </div>
              <div className="card-action">
                <a href="#">View Details</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
