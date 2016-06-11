import React from 'react';
import MosqueMainNav from './Navigation/MosqueMainNav.jsx';

const MainLayout = ({content}) => (
  <div className="main-wrapper">
    <MosqueMainNav />
   	<div className="container">
    	{content()}
    </div>
  </div>
);

export default MainLayout;
