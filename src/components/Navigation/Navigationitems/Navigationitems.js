import React from 'react';
import cl from './Navigationitems.css';
import Navigationitem from './NavigationItem/Navigationitem';
import Navigationitems from './Navigationitems.css';

const Navigationites = (props) => (
<ul className='Navigationitems'>
  <Navigationitem link="/" active>Burger Builder</Navigationitem>
  <Navigationitem link="/"> Checkout</Navigationitem>
</ul>
);

export default Navigationites;