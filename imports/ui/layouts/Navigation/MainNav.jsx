import React from 'react';
import {Meteor} from 'meteor/meteor';

const MainNav = React.createClass({
  componentDidMount: function(){
    $('.dropdown-button').dropdown({
      hover: true, // Activate on hover
      belowOrigin: true // Displays dropdown below the button
    });

    $('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  },

  handleLogout: function(){
    if(confirm("Are you sure you want to logout?")){
      Meteor.logout(function(){
        FlowRouter.go("home")
      })
    }
  },
  render(){
    console.log(Meteor.user())
    return(
      <div className="navbar-fixed">
      <nav className="blue darken-2">
        <ul id="userDropdown" className="dropdown-content">
          <li><a onClick={this.handleLogout}>Logout</a></li>
        </ul>
        <ul id="userDropdown1" className="dropdown-content">
          <li><a onClick={this.handleLogout}>Logout</a></li>
        </ul>
        <div className="nav-wrapper gradient-navbar container">
          <a href={FlowRouter.path("index")} className="brand-logo">GoMosque Events</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href={FlowRouter.path("eventsView")}>Events</a></li>
              <li><a href={FlowRouter.path("dashboard")}>Dashboard</a></li>
              <li><a className="dropdown-button" data-activates="userDropdown">{Meteor.user().emails[0].address}</a></li>
            </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href={FlowRouter.path("eventsView")}>Events</a></li>
            <li><a href={FlowRouter.path("dashboard")}>Dashboard</a></li>
            <li><a className="dropdown-button" data-activates="userDropdown1">{Meteor.user().emails[0].address}</a></li>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
});

export default MainNav;
