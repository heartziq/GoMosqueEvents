import React, {Component} from 'react';
import SingleParticipant from './SingleParticipant.jsx';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Participants extends TrackerReact(Component) {
  constructor(){
  super();

  this.state={
    subscription: {
      users:  Meteor.subscribe('allUsers')

    }
  }
  }

  participantDetails(){
    participantsId = this.props.participantsId
    participantsDetails =[]
    {participantsId.map((participantId)=>{

       participantsDetails.push(Meteor.users.find({_id: participantId}).fetch());

    } )}


    return participantsDetails;
  }

  render(){
    participants = this.props.participants;
    if(!participants)
      return <span> loading </span>

  console.log("fe", participants)

    return (
      <div className="row">
          {participants.map((singleEmail)=>{

            return <SingleParticipant email={singleEmail} key={singleEmail} eventName={this.props.eventName}/>
          } )}

      </div>
    )
  }
}
