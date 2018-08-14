import React from 'react';
import { NavLink } from 'reactstrap';
import Affiche from '../img/affiche.jpg';

const HomePage = () => (
  <NavLink href="/teleteton/Events" >
    <img 
      src={Affiche}
      alt="Affiche_Teleteton"
      style={{ width: 'auto', height: '80vh'}}/>
  </NavLink>
);

export default HomePage;