import React from 'react';
import './preloader.css';
import preloader from './logo.gif';

const Preloader = () => {
  return (
    
    <div className="preloader-container">
      <img className="preloader" src={preloader} alt="Loading..." />
    </div>
  );
};

export default Preloader;
