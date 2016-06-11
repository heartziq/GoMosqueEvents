import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// initialise a collection here. mongo collection name should be the file name.
export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
  //declare all publish relating to the collection here
  //EXAMPLE:
  Meteor.publish('allEvents', function eventsPublication() {
    return Events.find();
  });

  Meteor.publish("allUsers", function () {
    return Meteor.users.find({});
});

}

Meteor.methods({
  //declare all methods related to the collection here
  // EXAMPLE:
  addEvents(name, description, theDate, start, end, needParticipants, numberParticipants, needVolunteers, numberVolunteers,
gender) {

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Events.insert({
      name,
      description,
      theDate,
      start,
      end,
      needParticipants,
      numberParticipants,
      needVolunteers,
      numberVolunteers,
      gender,
      createdAt: new Date(), // current time
      mosqueId: Meteor.userId(),           // _id of logged in user
      mosqueName: Meteor.user().profile.name  // username of logged in user
    });
  },
  updateEvents(eventId, name, description, theDate, start, end, needParticipants, numberParticipants, needVolunteers, numberVolunteers,
gender) {
    
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Events.update({_id: eventId}, {
      $set: {
        name,
        description,
        theDate,
        start,
        end,
        needParticipants,
        numberParticipants,
        needVolunteers,
        numberVolunteers,
        gender,
        updatedAt: new Date(), // current time
      }
    });
  },

  participateUser(eventId){
    Events.update({_id: eventId}, {
      $addToSet: {
        participants: Meteor.user().emails[0].address
      } });
  },
  volunteerUser(){

  },
  removeEvent(eventId){
    Events.remove(eventId)
  }
});
