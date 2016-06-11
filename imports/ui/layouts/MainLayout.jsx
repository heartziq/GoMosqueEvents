import React from 'react';
import MainNav from './Navigation/MainNav.jsx';

const MainLayout = ({content}) => (
  <div className="main-wrapper">
    <MainNav />
    <div className="container">
    	{content()}
    </div>
  </div>
);

export default MainLayout;
