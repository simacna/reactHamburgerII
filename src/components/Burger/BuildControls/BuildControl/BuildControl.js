import React from 'react';
import classes from './BuildControl.css';
// import { classes } from 'istanbul-lib-coverage';

const buildControl = (props) => (
  <div className='BuildControl'>
    {/* <div>{props}</div> */}
    <div>{props.label}</div>
    <button 
      className='Less' 
      onClick={props.removed} 
      disabled={props.disabled}>
        Less
      </button>
    <button className='More' onClick={props.added}>More</button>
  </div>
)
  
export default buildControl;