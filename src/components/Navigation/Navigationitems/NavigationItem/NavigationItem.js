import React from 'react';
import cl from './Navigationitem.css';

const Navigationitem = (props) => (
    <li className="Navigationitem">
      <a 
      href={props.link} 
      className={props.active ? 'active': null}
      > 
      {props.children}</a>
    </li>
 
)

export default Navigationitem;