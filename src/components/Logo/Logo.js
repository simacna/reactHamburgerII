import React from 'react';
import img from '../../assets/Images/logo.png';
import cl from './Logo.css';

const logo = () => (
  <div className="Logo">
    <img src={img} className="Logo img" />
  </div>
)

export default logo;