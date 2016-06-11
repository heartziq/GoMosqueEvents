import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Dashboard extends TrackerReact(Component){
  componentDidMount(){
    document.title = "Quick Plate | Dashboard"
  }

  render(){
    return(
      <h1>Events Participated/Volunteered by ME</h1>
    )
  }
}
