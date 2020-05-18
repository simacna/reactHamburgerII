import React from 'react';
import classes from './Modal.css'

const modal = (props) => (
<div className={classes.Modal}>
    {/* can be anything on how we wanna use the modal */}
    {props.children} 
  </div>)
  


export default modal;