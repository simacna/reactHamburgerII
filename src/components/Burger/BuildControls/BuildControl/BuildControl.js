import React from 'react';
import classes from './BuildControl.css';
// import { classes } from 'istanbul-lib-coverage';

const buildControl = (props) => (
  <div className='BuildControl'>
    <div>{props.label}</div>
    <button className='Less'>Less</button>
    <button className='More'>More</button>
  </div>
)
  

export default buildControl;