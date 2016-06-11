import React from 'react';
import MosqueNav from './Navigation/MosqueNav.jsx';

const MosqueLayout = ({content}) => (
  <div>
    <MosqueNav />

    {content()}
  </div>
);

export default MosqueLayout;
