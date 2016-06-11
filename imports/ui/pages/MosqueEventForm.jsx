import React from 'react';

import {Events} from '../../api/events.js';

export default class MosqueEventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            needParticipants: true,
            needVolunteers: true,
            gender: "all"
        };
    }
    componentDidMount() {
        document.title = "GoMosque 2.0 | MosqueEventForm"
        //load jQuery for datePicker
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
    }

    handleNeedParticipants() {

        this.setState({
            needParticipants: !this.state.needParticipants
        });
    }
    handleNeedVolunteers() {

        this.setState({
            needVolunteers: !this.state.needVolunteers
        });
    }
    handleSubmit(e) {
      e.preventDefault()
      var name = this.refs.name.value.trim();
      var description = this.refs.description.value.trim();
      var theDate = this.refs.date.value.trim();
      var needParticipants = this.state.needParticipants;
      var numberParticipants = parseInt(this.refs.participantNumber.value.trim());
      var needVolunteers = this.state.needVolunteers;
      var numberVolunteers = parseInt(this.refs.volunteerNumber.value.trim());
      var gender = e.target.elements.gender.value;

      console.log(name)
      console.log(description)
      console.log(theDate)
      console.log(needParticipants)
      console.log(numberParticipants)
      console.log(needVolunteers)
      console.log(numberVolunteers)
      console.log(gender)

      Meteor.call('addEvents', name, description, theDate, needParticipants, numberParticipants, needVolunteers, numberVolunteers,
    gender)

      //alert(name)
    //  alert('submitted!')
    }

    render() {
        return (
            <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">

                    <div className="input-field col s8">
                        <input id="name" type="text" className="validate" ref="name"/>
                        <label htmlFor="name">Name</label>
                    </div>
                </div>

                <div className="row">

                    <div className="input-field col s8">
                        <textarea id="description" className="materialize-textarea" ref="description"></textarea>
                        <label htmlFor="description">Description</label>
                    </div>
                </div>
                <div className="row">

                    <input type="date" className="datepicker col s8" id="date" ref="date"/>
                    <label htmlFor="date">Date</label>

                </div>

                <div className="row">
                    <div className="input-field col s2">
                        <input type="checkbox" className="filled-in" id="needParticipants" ref="needParticipants" onClick={this.handleNeedParticipants.bind(this)} defaultChecked={this.state.needParticipants}/>
                        <label htmlFor="needParticipants">Need Participant?</label>
                    </div>
                    <div className="input-field col s2">
                        <input id="participantNumber" type="text" className="validate" ref="participantNumber"/>
                        <label htmlFor="participantNumber"></label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s2">
                        <input type="checkbox" id="needVolunteers" className="filled-in" ref="needVolunteers" onClick={this.handleNeedVolunteers.bind(this)} defaultChecked={this.state.needVolunteers}/>
                        <label htmlFor="needVolunteers">Need Volunteer?</label>
                    </div>
                    <div className="input-field col s2">
                        <input id="volunteerNumber" type="text" className="validate" ref="volunteerNumber"/>
                        <label htmlFor="volunteerNumber"></label>
                    </div>
                </div>
                <div className="row">

                    <p>
                        <input name="gender" type="radio" id="male" value="m" ref="gender"/>
                        <label htmlFor="male">Male</label>
                    </p>

                    <p>
                        <input name="gender" type="radio" id="female" value="f" ref="gender"/>
                        <label htmlFor="female">Female</label>
                    </p>
                    <p>
                        <input name="gender" type="radio" id="all" value="all" ref="gender"/>
                        <label htmlFor="all">All</label>
                    </p>
                </div>

                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>

            </form>

        )
    }
}
