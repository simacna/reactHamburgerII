import React from 'react';
import cl from './Navigationitems.css';
import navigationItem from './NavigationItem/Navigationitem';

const navigationItems = (props) => (
<ul className='NavigationItems'>
  <NavigationItem link="/" active>Burger Builder</NavigationItem>
</ul>
);

export default navigationItem;