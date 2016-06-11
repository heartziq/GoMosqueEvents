import React, {Component} from 'react';

export default class SingleEvent extends Component {
  render(){
    //var stringOfMail = "";

    return (
      <div className="row">
        {this.props.singleEvent.name}

      </div>
    )
  }
}
