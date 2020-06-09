import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import cl from './SideDrawer.css';
const sideDrawer = (props) => {

  return (
    <div classes="SideDrawer">
      <div className="Logo"> menu </div>
        <Logo height="100%"/>
      <nav>
        <Navigationitems />
      </nav>
    </div>
    
  )
}

export default sideDrawer;
