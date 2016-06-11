import React from 'react';

export default class MosqueDashboard extends React.Component{
  componentDidMount(){
    document.title = "GoMosque 2.0 | MosqueDashboard"
  }

  render(){
    return(
      <h1>MosqueDashboard</h1>
    )
  }
}
