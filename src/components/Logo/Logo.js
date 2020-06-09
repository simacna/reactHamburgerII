import React from 'react';
import img from '../../assets/Images/logo.png';
import cl from './Logo.css';

const logo = (props) => (
  <div className="Logo" style={{height: props.height}}>
    <p>Logo height props.height {props.height}</p>
    <img src={img} className="Logo img" />
  </div>
)

export default logo;