import React from 'react';
import MosqueNav from './Navigation/MosqueNav.jsx';

const MosqueLayout = ({content}) => (
  <div>
    <MosqueNav />

    <div className="container">
    	{content()}
    </div>
  </div>
);

export default MosqueLayout;
