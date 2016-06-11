import React from 'react';

export default class MosqueEventSingle extends React.Component{

  componentDidMount(){
    document.title = "GoMosque 2.0 | MosqueDashboard"
  }


  render(){
  	event = this.props.event

    console.log(event)

    return(
    	<div>
          <li>
              {event.name}
          </li>
      </div>
    )
  }
}
