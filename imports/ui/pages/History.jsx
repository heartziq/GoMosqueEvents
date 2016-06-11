import React from 'react';

export default class History extends React.Component{
  componentDidMount(){
    document.title = "GoMosque 2.0 | History"
  }

  render(){
    return(
      <h1>History</h1>
    )
  }
}
