import React, {Component} from 'react';

export default class SingleParticipant extends Component {
  render(){
    return (
      <div className="row">
        <a href={`mailto:${this.props.email}?Subject=${this.props.eventName}`}>{this.props.email}</a>

      </div>
    )
  }
}
