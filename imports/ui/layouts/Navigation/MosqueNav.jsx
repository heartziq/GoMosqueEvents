import React from 'react';

const MosqueNav = React.createClass({
  render(){
    return(
      <nav className="green darken-2">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">GoMosque Events</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/mosqueRegister">Register</a></li>
            <li><a href="/mosqueLogin">Login</a></li>
          </ul>
        </div>
      </nav>
    )
  }

});

export default MosqueNav;
