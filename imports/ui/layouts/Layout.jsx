import React from 'react';
import Nav from './Navigation/Nav.jsx';

const Layout = ({content}) => (
  <div>
    <Nav />

    <div className="container">
    	{content()}
    </div>
  </div>
);

export default Layout;
