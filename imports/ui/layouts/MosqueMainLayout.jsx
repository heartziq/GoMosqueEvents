import React from 'react';
import MosqueMainNav from './Navigation/MosqueMainNav.jsx';

const MainLayout = ({content}) => (
  <div className="main-wrapper">
    <MosqueMainNav />
    {content()}
  </div>
);

export default MainLayout;
