import React from 'react';
import cl from './Button.css';

const button = (props) => (
  <button 
    className='Button'
    onClick={props.clicked}
  >
    {props.children}
  </button>
)

export default button;