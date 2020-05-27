import React from 'react';
import cl from './navigationItem.css';

const navigationItem = (props) => (
    <li className="Navigationitem">
      <a href={props.link} 
      className={props.active ? className={'active'}: null}> 
      {props.children}</a>
    </li>
 
)

export default navigationItem;